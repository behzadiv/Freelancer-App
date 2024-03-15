import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import useAuthorization from "../features/authentication/useAuthorization";
import toast from "react-hot-toast";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isAuthorized, isLoading, isVeryfied } =
    useAuthorization();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/auth");
    if (!isVeryfied && !isLoading) {
      toast.error("پروفایل شما هنوز تایید نشده است.");
      navigate("/not-access");
    }
    if (!isAuthorized && !isLoading) navigate("/not-access", { replace: true });
  }, [isAuthenticated, isAuthorized, isLoading, navigate, isVeryfied]);

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <Loading />
      </div>
    );
  if (isAuthenticated && isAuthorized) return children;
};

export default ProtectedRoute;
