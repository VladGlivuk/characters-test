import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Heading, Flex } from "@chakra-ui/react";
import {
  signInWithFacebookPopup,
  signInWithGooglePopup,
} from "@/services/firebase/authHandlers";
import useUserStore from "@/store/user/useUserStore";

const LoginPage: FC = () => {
  const { setUser } = useUserStore();
  const navigate = useNavigate();

  const googleLoginHandler = async () => {
    const user = await signInWithGooglePopup();

    setUser(user);
    navigate("/");
  };

  const facebookLoginHandler = async () => {
    const user = await signInWithFacebookPopup();

    setUser(user);
    navigate("/");
  };

  return (
    <div>
      <Heading margin={5} textAlign={"center"}>
        Login
      </Heading>

      <Flex
        gap="4"
        width="full"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Button onClick={googleLoginHandler} bg="red.500">
          Login with Google
        </Button>

        <Button onClick={facebookLoginHandler} bg="blue.500">
          Login with Facebook
        </Button>
      </Flex>
    </div>
  );
};

export default LoginPage;
