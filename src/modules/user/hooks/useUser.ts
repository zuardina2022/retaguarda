import { useEffect, useState } from 'react';

import { URL_USER_ALL } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { useRequests } from '../../../shared/hooks/useRequests';
import { useUserReducer } from '../../../store/reducers/userReducer/useUserReducer';

export const useUser = () => {
  const { users, setUsers } = useUserReducer();
  const [usersFiltered, setUsersFiltered] = useState(users);
  const { request, loading } = useRequests();

  useEffect(() => {
    console.log('useUser.ts');
    request(URL_USER_ALL, MethodsEnum.GET, setUsers);
  }, []);

  useEffect(() => {
    setUsersFiltered(users);
  }, [users]);

  const handleOnChangeSearch = (value: string) => {
    if (!value) {
      setUsersFiltered([...users]);
    } else {
      setUsersFiltered([...users.filter((user) => user.NomeLogin.includes(value))]);
    }
  };

  return {
    users: usersFiltered,
    loading,
    handleOnChangeSearch,
  };
};
