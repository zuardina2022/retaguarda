import {
  HomeOutlined,
  LaptopOutlined,
  ProfileOutlined,
  SafetyCertificateOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu as MenuAntd } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { CategoryRoutesEnum } from '../../../modules/category/routes';
import { OrderRoutesEnum } from '../../../modules/orders/routes';
import { ProductRoutesEnum } from '../../../modules/product/routes';
import { UserRoutesEnum } from '../../../modules/user/routes';
import { UsuarioRotaEnum } from '../../../modules/usuario/routes';
import { ContainerLogoName, ContainerMenu, LogoMenu, NameCompany } from './menu.style';

type MenuItem = Required<MenuProps>['items'][number];

const Menu = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState('1');

  const items: MenuItem[] = [
    {
      key: 'home',
      label: 'Principal',
      icon: <HomeOutlined />,
    },
    {
      key: 'cadastro',
      label: 'Cadastro',
      icon: <LaptopOutlined />,
      children: [
        {
          key: 'cadastro_empresa',
          label: 'Empresa',
          onClick: () => navigate(ProductRoutesEnum.PRODUCT),
        },
        {
          key: 'cadastro_empresagrupo',
          label: 'Empresa do Grupo',
          onClick: () => navigate(ProductRoutesEnum.PRODUCT_INSERT),
        },
        {
          key: 'cadastro_cliente',
          label: 'Cliente',
          onClick: () => navigate(ProductRoutesEnum.PRODUCT_INSERT),
        },
        {
          key: 'cadastro_fornecedor',
          label: 'Fornecedor',
          onClick: () => navigate(ProductRoutesEnum.PRODUCT_INSERT),
        },
        {
          key: 'cadastro_vendedor',
          label: 'Vendedor',
          onClick: () => navigate(ProductRoutesEnum.PRODUCT_INSERT),
        },
        {
          key: 'cadastro_pdv',
          label: 'Ponto de Venda',
          onClick: () => navigate(ProductRoutesEnum.PRODUCT_INSERT),
        },
        {
          key: 'cadastro_turno',
          label: 'Turno',
          onClick: () => navigate(ProductRoutesEnum.PRODUCT_INSERT),
        },
      ],
    },
    {
      key: 'alcada',
      label: 'Alçada',
      icon: <ProfileOutlined />,
      children: [
        {
          key: 'usuario_view',
          label: 'Usuário',
          onClick: () => navigate(UsuarioRotaEnum.USUARIO),
        },
        {
          key: 'usuario_global',
          label: 'Global',
          onClick: () => navigate(CategoryRoutesEnum.CATEGORY_INSERT),
        },
        {
          key: 'usuario_perfil',
          label: 'Perfil',
          onClick: () => navigate(CategoryRoutesEnum.CATEGORY_INSERT),
        },
        {
          key: 'usuario_bloquear',
          label: 'Bloquear Usuário',
          onClick: () => navigate(CategoryRoutesEnum.CATEGORY_INSERT),
        },
        {
          key: 'usuario_acesso',
          label: 'Trocar acesso',
          onClick: () => navigate(CategoryRoutesEnum.CATEGORY_INSERT),
        },
      ],
    },
    {
      key: 'order',
      label: 'Pedidos',
      icon: <SafetyCertificateOutlined />,
      onClick: () => navigate(OrderRoutesEnum.ORDER),
    },
    {
      key: 'user',
      label: 'Clientes',
      icon: <UserOutlined />,
      onClick: () => navigate(UserRoutesEnum.USER),
    },
  ];

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
  };

  return (
    <ContainerMenu>
      <ContainerLogoName>
        <LogoMenu />
        <NameCompany>Vendas Online</NameCompany>
      </ContainerLogoName>
      <MenuAntd
        theme="dark"
        onClick={onClick}
        style={{ width: 240 }}
        defaultOpenKeys={['sub1']}
        selectedKeys={[current]}
        mode="inline"
        items={items}
      />
    </ContainerMenu>
  );
};

export default Menu;
