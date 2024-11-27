import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";
import useUserStore from "@/store/user/useUserStore";

const PrivateRoute: FC = () => {
  const { user } = useUserStore();

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
