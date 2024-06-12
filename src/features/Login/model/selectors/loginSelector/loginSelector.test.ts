import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { loginSelector } from './loginSelector';

describe('getCounter', () => {
  test('should return login state', () => {
    const state: DeepPartial<StateSchema> = {
      login: { email: 'hi@test.ru', isLoading: false, password: '123' },
    };
    expect(loginSelector(state as StateSchema)).toEqual(
      { email: 'hi@test.ru', isLoading: false, password: '123' },
    );
  });
});
