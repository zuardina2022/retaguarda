import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UsuarioModel } from '../../../modules/usuario/model/UsuarioModel';

interface UsuarioState {
  usuarios: UsuarioModel[];
  usuario?: UsuarioModel;
}

const initialState: UsuarioState = {
  usuarios: [],
  usuario: undefined,
};

export const counterSlice = createSlice({
  name: 'usuarioReducer',
  initialState,
  reducers: {
    setUsuariosAction: (state, action: PayloadAction<UsuarioModel[]>) => {
      state.usuarios = action.payload;
    },
    setUsuarioAction: (state, action: PayloadAction<UsuarioModel>) => {
      state.usuario = action.payload;
    },
  },
});

export const { setUsuariosAction, setUsuarioAction } = counterSlice.actions;

export default counterSlice.reducer;
