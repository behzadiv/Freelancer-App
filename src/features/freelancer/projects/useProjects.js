import { useQuery } from "@tanstack/react-query";
import { getProjectsApi } from "../../../services/projectsService";
import { useLocation } from "react-router-dom";

export default function useProjects() {
  const { search } = useLocation();
  const queryObject = Object.fromEntries(new URLSearchParams(search));

  const { isLoading, data } = useQuery({
    queryFn: () => getProjectsApi(search),
    queryKey: ["get-all-projects", queryObject],
  });
  const { projects } = data || {};
  return { isLoading, projects };
}
