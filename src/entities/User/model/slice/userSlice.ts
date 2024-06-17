import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserSchema } from '../types/user';
import { USER_KEY } from '@/shared/const/localStorage';
import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';

const initialState: UserSchema = {};

const userDataFromLocalStorage = localStorage.getItem(USER_KEY);
if (userDataFromLocalStorage) {
  initialState.authData = JSON.parse(userDataFromLocalStorage);
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
    },
    logout: (state) => {
      state.authData = undefined;
    },
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
