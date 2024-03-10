import DashboardHeader from "../../ui/DashboardHeader";
import Loading from "../../ui/Loading";
import useOwnerProjects from "../projects/useOwnerProjects";

import Stats from "./Stats";

const Dashboard = () => {
  const { isLoading, projects } = useOwnerProjects();

  if (isLoading) return <Loading />;
  return (
    <>
      <DashboardHeader />
      <Stats projects={projects} />
    </>
  );
};

export default Dashboard;
