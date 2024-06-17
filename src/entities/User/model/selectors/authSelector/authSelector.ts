import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';

export const authSelector = (state: StateSchema) => state.user.authData;
