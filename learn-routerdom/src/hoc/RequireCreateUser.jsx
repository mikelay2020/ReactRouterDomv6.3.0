import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../hook/useAuth";

const RequireCreateUser = ({ children }) => {
  const location = useLocation();
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/signup" state={{ from: location }} />;
  }

  return children;
};

export { RequireCreateUser };
