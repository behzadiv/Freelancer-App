import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logOutApi } from "../../services/authService";
import { useNavigate } from "react-router-dom";

export default function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { isPending, mutateAsync: logout } = useMutation({
    mutationFn: logOutApi,
    onSuccess: () => {
      navigate("/auth", { replace: true });
      queryClient.removeQueries();
    },
  });

  return { isPending, logout };
}
