import Loading from "../../ui/Loading";
import DashboardHeader from "../../ui/DashboardHeader";
import Stats from "./Stats";
import useProposalList from "./useProposalList";

const Dashboard = () => {
  const { isLoading, proposals } = useProposalList();

  if (isLoading) return <Loading />;
  return (
    <>
      <DashboardHeader />
      <Stats proposals={proposals} />
    </>
  );
};

export default Dashboard;
