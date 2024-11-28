import { FC } from 'react';
import { logout } from '@/services/firebase/authHandlers';
import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const LogoutButton: FC = () => {
  const navigate = useNavigate();

  const logoutHandler = async () => {
    await logout();
    navigate('/');
  };

  return (
    <Button colorScheme="red" size="sm" onClick={logoutHandler}>
      Logout
    </Button>
  );
};

export default LogoutButton;
