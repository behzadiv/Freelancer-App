import { useQuery } from "@tanstack/react-query";
import { getProjectsApi } from "../../../services/projectsService";

export default function useProjects() {
  const { isLoading, data } = useQuery({
    queryFn: getProjectsApi,
    queryKey: ["get-all-projects"],
  });
  const { projects } = data || {};
  return { isLoading, projects };
}
