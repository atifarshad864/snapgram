import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  let auth = { accessToken: false };
  return auth.accessToken ? <Outlet /> : <Navigate to="/sign-in" />;
};

export default PrivateRoutes;
