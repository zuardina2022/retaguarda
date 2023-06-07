import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UsuarioModel } from '../../../modules/usuario/model/UsuarioModel';
import { NotificationType } from '../../../shared/types/NotificationType';

interface GlobalState {
  notification?: NotificationType;
  user?: UsuarioModel;
}

const initialState: GlobalState = {
  notification: undefined,
  user: undefined,
};

export const counterSlice = createSlice({
  name: 'globalReducer',
  initialState,
  reducers: {
    setNotificationAction: (state, action: PayloadAction<NotificationType>) => {
      state.notification = action.payload;
    },
    setUserAction: (state, action: PayloadAction<UsuarioModel>) => {
      state.user = action.payload;
    },
  },
});

export const { setNotificationAction, setUserAction } = counterSlice.actions;

export default counterSlice.reducer;
