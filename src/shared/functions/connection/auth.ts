import { NavigateFunction, redirect } from 'react-router-dom';

import { LoginRoutesEnum } from '../../../modules/login/routes';
import { UsuarioTokenTipo } from '../../../modules/login/types/UsuarioTokenTipo';
import { AUTHORIZATION_KEY } from '../../constants/authorizationConstants';
// import { URL_USER } from '../../constants/urls';
// import { connectionAPIGet } from './connectionAPI';
import { getItemStorage, removeItemStorage, setItemStorage } from './storageProxy';

export const unsetAuthorizationToken = () => removeItemStorage(AUTHORIZATION_KEY);

export const setAuthorizationToken = (idUsuario?: number) => {
  if (idUsuario) {
    setItemStorage(AUTHORIZATION_KEY, idUsuario.toString());
  }
};

export const getAuthorizationToken = () => getItemStorage(AUTHORIZATION_KEY);

export const getUserInfoByToken = (): UsuarioTokenTipo | undefined => {
  const token = getAuthorizationToken();
  const tokenSplited = token?.split('.');

  if (tokenSplited && tokenSplited.length > 1) {
    return JSON.parse(window.atob(tokenSplited[1]));
  }

  return undefined;
};

export const verifyLoggedIn = async () => {
  const token = getAuthorizationToken();
  console.log('auth token: ' + token);
  if (!token) {
    return redirect(LoginRoutesEnum.LOGIN);
  }
  // const user = await connectionAPIGet<UsuarioTipo>(URL_USER).catch(() => {
  //   console.log('auth.ts');
  //   console.log(user);
  //   unsetAuthorizationToken();
  // });

  // if (!user) {
  //   return redirect(LoginRoutesEnum.LOGIN);
  // }

  return null;
};

export const logout = (navigate: NavigateFunction) => {
  unsetAuthorizationToken();
  navigate(LoginRoutesEnum.LOGIN);
};
