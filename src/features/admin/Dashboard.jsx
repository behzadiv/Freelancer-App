import DashboardHeader from "../../ui/DashboardHeader";
import Loading from "../../ui/Loading";
import useProjects from "../freelancer/projects/useProjects";
import useProposalList from "../proposals/useProposalList";
import Stats from "./Stats";
import useUsers from "./useUsers";

const Dashboard = () => {
  const { proposals, isLoading: isLoading1 } = useProposalList();
  const { projects, isLoading: isLoading2 } = useProjects();
  const { users, isLoading: isLoading3 } = useUsers();
  if (isLoading1 || isLoading2 || isLoading3) return <Loading />;

  return (
    <>
      <DashboardHeader />
      <Stats
        proposals={proposals.length}
        projects={projects.length}
        users={users.length}
      />
    </>
  );
};

export default Dashboard;
