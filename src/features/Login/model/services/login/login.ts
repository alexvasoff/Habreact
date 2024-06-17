import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from '@/entities/User';
import { USER_KEY } from '@/shared/const/localStorage';

interface FetchLoginProps {
  email: string;
  password: string;
}

export const fetchLogin = createAsyncThunk<User, FetchLoginProps, { rejectValue: string }>(
  'fetchLogin',
  async (authData, thunkAPI) => {
    try {
      const response = await axios.post<User>('http://localhost:8000/login', authData);

      if (!response.data) {
        throw new Error('no data');
      }

      localStorage.setItem(USER_KEY, JSON.stringify(response.data));
      thunkAPI.dispatch(userActions.setUser(response.data));

      return response.data;
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue('Пользователь не найден');
    }
  },
);
