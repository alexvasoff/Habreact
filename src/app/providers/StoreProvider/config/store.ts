import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from '../config/StateSchema';
import { counterReducer } from '@/entities/Counter/model/slice/counterSlice';

export function createReduxStore(initialState?: StateSchema) {
  return configureStore<StateSchema>({
    reducer: { counter: counterReducer },
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
}
