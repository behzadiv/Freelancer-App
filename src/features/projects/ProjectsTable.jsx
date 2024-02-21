import Loading from "../../ui/Loading";
import useOwnerProjects from "./useOwnerProjects";

const ProjectsTable = () => {
  const { projects, isLoading } = useOwnerProjects();

  if (isLoading) return <Loading />;
  if (projects?.length === 0) return <div>خالی</div>;

  return <div></div>;
};

export default ProjectsTable;
