import { Header } from 'antd/es/layout/layout';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Menu from '../../../shared/components/menu/Menu';
import { ScreenContainer } from '../../../shared/components/screen/screen.style';
import { useGlobalReducer } from '../../../store/reducers/globalReducer/useGlobalReducer';
import { ProductRoutesEnum } from '../../product/routes';

const FirstScreen = () => {
  const { user } = useGlobalReducer();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(user?.NomeCompleto);
    console.log(user);
    if (user) {
      navigate(ProductRoutesEnum.PRODUCT);
    }
  }, [user]);

  return (
    <>
      <Header />
      <ScreenContainer>
        <Menu />
      </ScreenContainer>
    </>
  );
};

export default FirstScreen;
