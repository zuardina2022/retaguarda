import { useDispatch } from 'react-redux';

import { UsuarioModel } from '../../../modules/usuario/model/UsuarioModel';
import { NotificationEnum } from '../../../shared/types/NotificationType';
import { useAppSelector } from '../../hooks';
import { setNotificationAction, setUserAction } from '.';

export const useGlobalReducer = () => {
  const dispatch = useDispatch();
  const { user, notification } = useAppSelector((state) => state.globalReducer);

  const setNotification = (message: string, type: NotificationEnum, description?: string) => {
    dispatch(
      setNotificationAction({
        message,
        type,
        description,
      }),
    );
  };
  const setUser = (user: UsuarioModel) => {
    dispatch(setUserAction(user));
  };

  return {
    user,
    notification,
    setNotification,
    setUser,
  };
};
