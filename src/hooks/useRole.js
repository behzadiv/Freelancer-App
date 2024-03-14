import { useNavigate } from "react-router-dom";

const RolesRoute = {
  FREELANCER: "/freelancer",
  ADMIN: "/admin",
  OWNER: "/owner",
};

export default function useRole() {
  const navigate = useNavigate();

  return (role) => navigate(RolesRoute[role]);
}
