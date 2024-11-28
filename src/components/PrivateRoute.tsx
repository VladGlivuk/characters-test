import { FC, useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useUserStore from '@/store/user/useUserStore';

const PrivateRoute: FC = () => {
  const [localUser] = useState(window.localStorage.getItem('user'));

  const { user, setUser } = useUserStore();

  useEffect(() => {
    if (!user && localUser) setUser(JSON.parse(localUser));
  }, []);

  return user || localUser ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
