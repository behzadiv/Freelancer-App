import { useQuery } from "@tanstack/react-query";
import { getUsersApi } from "../../services/authService";

export default function useUser() {
  const { data, isLoading } = useQuery({
    queryKey: ["get-users"],
    queryFn: getUsersApi,
  });

  const { users } = data || {};
  return { users, isLoading };
}
