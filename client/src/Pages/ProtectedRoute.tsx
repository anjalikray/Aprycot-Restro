import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/authContext";

interface ProtectedRouteProps {
  children: ReactNode; 
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const auth = useAuth();

  if (!auth?.user) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
