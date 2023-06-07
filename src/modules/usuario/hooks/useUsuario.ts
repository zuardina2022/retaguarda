import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { URL_USUARIO, URL_USUARIO_EXCLUIR } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { useRequests } from '../../../shared/hooks/useRequests';
import { useUsuarioReducer } from '../../../store/reducers/usuarioReducer/useUsuarioReducer';
import { UsuarioRotaEnum } from '../routes';

export const useUsuario = () => {
  const { usuarios, setUsuarios } = useUsuarioReducer();
  const [usuarioIdDelete, setUsuarioIdDelete] = useState<number | undefined>();
  const [usuariosFiltered, setUsuariosFiltered] = useState(usuarios);
  const { request } = useRequests();
  const navigate = useNavigate();

  useEffect(() => {
    if (!usuarios || usuarios.length === 0) {
      request(URL_USUARIO.replace('{idEmpresa}', 'idEmpresa=1'), MethodsEnum.GET, setUsuarios);
    }
  }, []);

  useEffect(() => {
    console.log(usuarios);
    setUsuariosFiltered([...usuarios]);
  }, [usuarios]);

  const handleOnChangeSearch = (value: string) => {
    if (!value) {
      setUsuariosFiltered([...usuarios]);
    } else {
      setUsuariosFiltered([
        ...usuariosFiltered.filter((usuario) =>
          usuario.nomeCompleto.toUpperCase().includes(value.toUpperCase()),
        ),
      ]);
    }
  };

  const handleOnClickUsuario = () => {
    navigate(UsuarioRotaEnum.USUARIO_INCLUIR);
  };

  const handleOpenModalDelete = (usuarioId: number) => {
    setUsuarioIdDelete(usuarioId);
  };

  const handleCloseModalDelete = () => {
    setUsuarioIdDelete(undefined);
  };

  const handleConfirmDeleteUsuario = async () => {
    console.log(usuarioIdDelete);
    await request(
      URL_USUARIO_EXCLUIR.replace('{idUsuario}', `usuarioID=${usuarioIdDelete}`),
      MethodsEnum.DELETE,
      undefined,
      undefined,
      'Usuário deletado com sucesso!',
    );
    request(URL_USUARIO.replace('{idEmpresa}', 'idEmpresa=1'), MethodsEnum.GET, setUsuarios);
    setUsuarioIdDelete(undefined);
  };

  const handleGoToEditUsuario = (usuarioId: number) => {
    navigate(UsuarioRotaEnum.USUARIO_EDITAR.replace(':usuarioId', `${usuarioId}`));
  };

  return {
    usuarios: usuariosFiltered,
    openModalDelete: !!usuarioIdDelete,
    handleOnChangeSearch,
    handleOnClickUsuario,
    handleOpenModalDelete,
    handleCloseModalDelete,
    handleConfirmDeleteUsuario,
    handleGoToEditUsuario,
  };
};
