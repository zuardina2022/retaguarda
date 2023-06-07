import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { URL_USUARIO, URL_USUARIO_ID } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { useRequests } from '../../../shared/hooks/useRequests';
import { useUsuarioReducer } from '../../../store/reducers/usuarioReducer/useUsuarioReducer';
import { UsuarioRotaEnum } from '../routes';

export const useIncluirUsuario = () => {
  const { usuarioId } = useParams<{ usuarioId: string }>();
  const [nomeCompleto, setNomeCompleto] = useState('');
  const navigate = useNavigate();
  const [disabledButton, setDisabledButton] = useState(true);
  const { request, loading } = useRequests();
  const { setUsuarios, usuario, setUsuario } = useUsuarioReducer();

  useEffect(() => {
    if (usuario) {
      setNomeCompleto(usuario.nomeCompleto);
    }
  }, [usuario]);

  useEffect(() => {
    if (!nomeCompleto) {
      setDisabledButton(true);
    } else {
      setDisabledButton(false);
    }
  }, [nomeCompleto]);

  useEffect(() => {
    if (usuarioId) {
      request(URL_USUARIO_ID.replace('{usuarioId}', usuarioId), MethodsEnum.GET, setUsuario);
    } else {
      setNomeCompleto('');
    }
  }, [usuarioId]);

  const inserirUsuario = async () => {
    if (usuarioId) {
      await request(URL_USUARIO_ID.replace('{usuarioId}', usuarioId), MethodsEnum.PUT, undefined, {
        nomeCompleto,
      });
    } else {
      await request(URL_USUARIO, MethodsEnum.POST, undefined, { nomeCompleto });
    }
    await request(URL_USUARIO, MethodsEnum.GET, setUsuarios);

    navigate(UsuarioRotaEnum.USUARIO);
  };

  const handleOnChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNomeCompleto(event.target.value);
  };

  return {
    nomeCompleto,
    usuarioId,
    disabledButton,
    handleOnChangeName,
    inserirUsuario,
    loading,
  };
};
