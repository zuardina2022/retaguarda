import { useNavigate } from 'react-router-dom';

import Button from '../../../shared/components/buttons/button/Button';
import Input from '../../../shared/components/inputs/input/Input';
import Select from '../../../shared/components/inputs/select/Select';
import Loading from '../../../shared/components/loading/Loading';
import Screen from '../../../shared/components/screen/Screen';
import {
  DisplayFlexJustifyCenter,
  DisplayFlexJustifyRight,
} from '../../../shared/components/styles/display.styled';
import { LimitedContainer } from '../../../shared/components/styles/limited.styled';
import { useIncluirUsuario } from '../hooks/useIncluiUsuario';
import { UsuarioRotaEnum } from '../routes';

const UsuarioInserir = () => {
  const { nomeCompleto, usuarioId, loading, handleOnChangeName, disabledButton, inserirUsuario } =
    useIncluirUsuario();
  const navigate = useNavigate();

  const handleOnClickCancel = () => {
    navigate(UsuarioRotaEnum.USUARIO);
  };

  return (
    <Screen
      listBreadcrumb={[
        {
          name: 'HOME',
        },
        {
          name: 'USUÁRIO',
          navigateTo: UsuarioRotaEnum.USUARIO,
        },
        {
          name: usuarioId ? 'EDITAR USUÁRIO' : 'INSERIR USUÁRIO',
        },
      ]}
    >
      <DisplayFlexJustifyCenter>
        {loading && usuarioId ? (
          <DisplayFlexJustifyCenter>
            <Loading size="large" />
          </DisplayFlexJustifyCenter>
        ) : (
          <LimitedContainer width={400}>
            <Input
              onChange={handleOnChangeName}
              value={nomeCompleto}
              margin="0px 0px 16px 0px"
              title="Nome Completo:"
              placeholder="Nome"
            />
            <Input
              onChange={handleOnChangeName}
              value={nomeLogin}
              margin="0px 0px 16px 0px"
              title="Nome Login:"
              placeholder="Login"
            />
            <Input
              onChange={handleOnChangeName}
              value={email}
              margin="0px 0px 16px 0px"
              title="E-Mail principal:"
              placeholder="e-mail"
            />
            <Input
              onChange={handleOnChangeName}
              value={nomeLogin}
              margin="0px 0px 16px 0px"
              title="Número máximo de login simultâneos:"
              placeholder="login máximo"
            />
            <Input
              onChange={handleOnChangeName}
              value={nomeLogin}
              margin="0px 0px 16px 0px"
              title="Telefone:"
              placeholder="telefone"
            />
            <Input
              onChange={handleOnChangeName}
              value={nomeLogin}
              margin="0px 0px 16px 0px"
              title="Código do cracha para acesso direto:"
              placeholder="código do cracha"
            />
            <Select
              defaultValue={`${product.categoryId || ''}`}
              data-testid={ProductInsertTestIdEnum.PRODUCT_INPUT_SELECT}
              title="Seleciona o turno:"
              margin="0px 0px 16px 0px"
              onChange={handleChangeSelect}
              options={categories.map((category: CategoryType) => ({
                value: `${category.id}`,
                label: `${category.name}`,
              }))}
            />
            <Input
              onChange={handleOnChangeName}
              value={nomeLogin}
              margin="0px 0px 16px 0px"
              title="Solicitar turno ao operador obrigatóriamente ?"
              placeholder="código do cracha"
            />
            <Input
              onChange={handleOnChangeName}
              value={nomeLogin}
              margin="0px 0px 16px 0px"
              title="Selecione os grupos de perfil"
              placeholder="grupo de perfil"
            />
            <DisplayFlexJustifyRight>
              <LimitedContainer margin="0px 8px" width={120}>
                <Button onClick={handleOnClickCancel} danger>
                  Cancelar
                </Button>
              </LimitedContainer>
              <LimitedContainer width={160}>
                <Button
                  disabled={disabledButton}
                  loading={loading}
                  onClick={inserirUsuario}
                  type="primary"
                >
                  {usuarioId ? 'Salvar' : 'Inserir Usuário'}
                </Button>
              </LimitedContainer>
            </DisplayFlexJustifyRight>
          </LimitedContainer>
        )}
      </DisplayFlexJustifyCenter>
    </Screen>
  );
};

export default UsuarioInserir;
