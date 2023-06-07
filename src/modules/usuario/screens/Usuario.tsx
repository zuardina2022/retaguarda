import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Input, Modal } from 'antd';
import { ColumnsType } from 'antd/es/table';

import Button from '../../../shared/components/buttons/button/Button';
import Screen from '../../../shared/components/screen/Screen';
import {
  DisplayFlex,
  DisplayFlexJustifyBetween,
} from '../../../shared/components/styles/display.styled';
import { LimitedContainer } from '../../../shared/components/styles/limited.styled';
import Table from '../../../shared/components/table/Table';
import { useUsuario } from '../hooks/useUsuario';
import { UsuarioModel } from '../model/UsuarioModel';

const { Search } = Input;

const Usuario = () => {
  const {
    usuarios,
    openModalDelete,
    handleOnChangeSearch,
    handleOnClickUsuario,
    handleOpenModalDelete,
    handleCloseModalDelete,
    handleConfirmDeleteUsuario,
    handleGoToEditUsuario,
  } = useUsuario();

  const columns: ColumnsType<UsuarioModel> = [
    {
      title: 'Código',
      dataIndex: 'idUsuario',
      key: 'idUsuario',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Nome',
      dataIndex: 'nomeCompleto',
      key: 'nomeCompleto',
      sorter: (a, b) => a.nomeCompleto.localeCompare(b.nomeCompleto),
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Login',
      dataIndex: 'nomeLogin',
      key: 'nomeLogin',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Ações',
      dataIndex: '',
      width: 240,
      key: 'x',
      render: (_, usuario) => (
        <LimitedContainer width={180}>
          <DisplayFlex>
            <LimitedContainer margin="0px 16px 0px 0px" width={90}>
              <Button
                onClick={() => handleGoToEditUsuario(usuario.idUsuario)}
                icon={<EditOutlined />}
              >
                Editar
              </Button>
            </LimitedContainer>
            <Button
              danger
              onClick={() => handleOpenModalDelete(usuario.idUsuario)}
              icon={<DeleteOutlined />}
            >
              Deletar
            </Button>
          </DisplayFlex>
        </LimitedContainer>
      ),
    },
  ];

  return (
    <Screen
      listBreadcrumb={[
        {
          name: 'HOME',
        },
        {
          name: 'USUARIO',
        },
      ]}
    >
      <Modal
        title="Atenção"
        open={openModalDelete}
        onOk={handleConfirmDeleteUsuario}
        onCancel={handleCloseModalDelete}
        okText="Sim"
        cancelText="Cancelar"
      >
        <p>Tem certeza que deseja excluir esse usuário?</p>
      </Modal>
      <DisplayFlexJustifyBetween margin="0px 0px 16px 0px">
        <LimitedContainer width={240}>
          <Search placeholder="Buscar usuário" onSearch={handleOnChangeSearch} enterButton />
        </LimitedContainer>

        <LimitedContainer width={120}>
          <Button type="primary" onClick={handleOnClickUsuario}>
            Inserir
          </Button>
        </LimitedContainer>
      </DisplayFlexJustifyBetween>

      <Table columns={columns} dataSource={usuarios} />
    </Screen>
  );
};

export default Usuario;
