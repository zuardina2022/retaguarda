import { useDispatch } from 'react-redux';

import { UsuarioModel } from '../../../modules/usuario/model/UsuarioModel';
import { useAppSelector } from '../../hooks';
import { setUsersAction } from '.';

export const useUserReducer = () => {
  const dispatch = useDispatch();
  const { users } = useAppSelector((state) => state.userReducer);

  const setUsers = (users: UsuarioModel[]) => {
    dispatch(setUsersAction(users));
  };

  return {
    users,
    setUsers,
  };
};
