import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getOneProjectApi } from "../../services/projectsService";

export default function useOneProject() {
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["get-project",id],
    queryFn: () => getOneProjectApi(id),
  });
  const { project } = data || {};
  return { project, isLoading };
}
