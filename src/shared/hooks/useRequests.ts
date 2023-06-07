import { useState } from 'react';
import { NavigateFunction } from 'react-router-dom';

import { FirstScreenRoutesEnum } from '../../modules/firstScreen/routes';
import { AutenticacaoTipo } from '../../modules/login/types/AutenticacaoTipo';
import { useGlobalReducer } from '../../store/reducers/globalReducer/useGlobalReducer';
import { ERROR_INVALID_PASSWORD } from '../constants/errosStatus';
import { URL_AUTENTICACAO } from '../constants/urls';
import { setAuthorizationToken } from '../functions/connection/auth';
import ConnectionAPI, {
  connectionAPIGet,
  connectionAPIPost,
  MethodType,
} from '../functions/connection/connectionAPI';

export const useRequests = () => {
  const [loading, setLoading] = useState(false);
  const { setNotification, setUser } = useGlobalReducer();

  const request = async <T>(
    url: string,
    method: MethodType,
    saveGlobal?: (object: T) => void,
    body?: unknown,
    message?: string,
  ): Promise<T | undefined> => {
    setLoading(true);
    console.log('chamou resquest');
    const returnObject: T | undefined = await ConnectionAPI.connect<T>(url, method, body)
      .then((value) => {
        if (saveGlobal) {
          saveGlobal(value);
        }
        if (message) {
          setNotification('Sucesso!', 'success', message);
        }
        console.log('Sucesso', value);
        return value;
      })
      .catch((error: Error) => {
        setNotification(error.message, 'error');
        return undefined;
      });

    setLoading(false);

    return returnObject;
  };

  const authRequest = async (navigate: NavigateFunction, body: unknown): Promise<void> => {
    setLoading(true);

    await connectionAPIPost<AutenticacaoTipo>(URL_AUTENTICACAO, body)
      .then((result) => {
        setUser(result.usuario);
        setAuthorizationToken(result.idUsuario);
        navigate(FirstScreenRoutesEnum.FIRST_SCREEN);
        return result;
      })
      .catch(() => {
        setNotification(ERROR_INVALID_PASSWORD, 'error');
        return undefined;
      });

    setLoading(false);
  };

  const autenticaUsuarioRequest = async (url: string): Promise<void> => {
    setLoading(true);

    await connectionAPIGet<AutenticacaoTipo>(url)
      .then((result) => {
        setUser(result.usuario);
        setAuthorizationToken(result.idUsuario);
        return result;
      })
      .catch(() => {
        setNotification(ERROR_INVALID_PASSWORD, 'error');
        return undefined;
      });

    setLoading(false);
  };

  return {
    loading,
    authRequest,
    autenticaUsuarioRequest,
    request,
  };
};
