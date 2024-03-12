import { useLocation } from "react-router-dom";
import useUser from "./useUser";

const ROLLS = {
  freelancer: "FREELANCER",
  owner: "OWNER",
  admin: "ADMIN",
};
export default function useAuthorization() {
  const { isLoading, user } = useUser();
  const { pathname } = useLocation();
  let isAuthenticated = false;
  let isAuthorized = false;
  const desiredRoll = pathname.split("/").at(1);

  if (user) {
    isAuthenticated = true;
  }
  if (Object.keys(ROLLS).includes(desiredRoll)) {
    if (user && user.role === ROLLS[desiredRoll]) isAuthorized = true;
  }

  return { isAuthenticated, isAuthorized, isLoading };
}
