import { logout } from '@/services/firebase/authHandlers';
import { Button } from '@chakra-ui/react';

const LogoutButton = () => {
  return <Button onClick={logout}>Logout</Button>;
};

export default LogoutButton;
