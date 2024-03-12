import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import useAuthorization from "../features/authentication/useAuthorization";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isAuthorized, isLoading } = useAuthorization();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/auth");
    if (!isAuthorized && !isLoading) navigate("/not-access", { replace: true });
  }, [isAuthenticated, isAuthorized, isLoading, navigate]);

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <Loading />
      </div>
    );
  if (isAuthenticated && isAuthorized) return children;
};

export default ProtectedRoute;
