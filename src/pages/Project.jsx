import ProjectHeader from "../features/project/ProjectHeader";
import ProposalTable from "../features/project/ProposalTable";
import useOneProject from "../features/project/useProject";
import Loading from "../ui/Loading";

const Project = () => {
  const { isLoading, project } = useOneProject();

  if (isLoading) return <Loading />;
  return (
    <div>
      <ProjectHeader project={project} />
      <ProposalTable proposals={project.proposals} />
    </div>
  );
};

export default Project;
