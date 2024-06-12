import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from '@/entities/User';

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

      return response.data;
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue('error');
    }
  },
);
