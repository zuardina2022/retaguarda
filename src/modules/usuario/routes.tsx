import { RouteObject } from 'react-router-dom';

import Usuario from './';
import UsuarioIncluir from './screens/UsuarioIncluir';

export enum UsuarioRotaEnum {
  USUARIO = '/usuario',
  USUARIO_INCLUIR = '/usuario/insert',
  USUARIO_EDITAR = '/usuario/:usuarioId',
}

export const usuarioScreens: RouteObject[] = [
  {
    path: UsuarioRotaEnum.USUARIO,
    element: <Usuario />,
  },
  {
    path: UsuarioRotaEnum.USUARIO_INCLUIR,
    element: <UsuarioIncluir />,
  },
  {
    path: UsuarioRotaEnum.USUARIO_EDITAR,
    element: <UsuarioIncluir />,
  },
];
