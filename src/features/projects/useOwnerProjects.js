import { useQuery } from "@tanstack/react-query";
import { getOwnerProjectsApi } from "../../services/projectsService";

export default function useOwnerProjects() {
  const { isLoading, data } = useQuery({
    queryKey: ["get-projects"],
    queryFn: getOwnerProjectsApi,
  });

  const { projects } = data || [];

  return { projects, isLoading };
}
