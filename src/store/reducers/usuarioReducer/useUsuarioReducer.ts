import { useDispatch } from 'react-redux';

import { UsuarioModel } from '../../../modules/usuario/model/UsuarioModel';
import { useAppSelector } from '../../hooks';
import { setUsuarioAction, setUsuariosAction } from '.';

export const useUsuarioReducer = () => {
  const dispatch = useDispatch();
  const { usuarios, usuario } = useAppSelector((state) => state.usuarioReducer);

  const setUsuarios = (currentUsuarios: UsuarioModel[]) => {
    dispatch(setUsuariosAction(currentUsuarios));
  };

  const setUsuario = (currentUsuario: UsuarioModel) => {
    dispatch(setUsuarioAction(currentUsuario));
  };

  return {
    usuarios,
    usuario,
    setUsuarios,
    setUsuario,
  };
};
