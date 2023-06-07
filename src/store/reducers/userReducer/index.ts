import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UsuarioModel } from '../../../modules/usuario/model/UsuarioModel';

interface UserState {
  users: UsuarioModel[];
}

const initialState: UserState = {
  users: [],
};

export const counterSlice = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    setUsersAction: (state, action: PayloadAction<UsuarioModel[]>) => {
      state.users = action.payload;
    },
  },
});

export const { setUsersAction } = counterSlice.actions;

export default counterSlice.reducer;
