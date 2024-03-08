import {
  HiCollection,
  HiCurrencyDollar,
  HiOutlineViewGrid,
} from "react-icons/hi";
import Stat from "../../ui/Stat";

const Stats = ({ projects }) => {
  const numOfProjects = projects.length;
  const numOfProposal = projects.reduce(
    (acc, curr) => acc + curr.proposals.length,
    0
  );
  const numOfAcceptedProjects = projects.reduce(
    (acc, curr) => Number(curr.status === "CLOSE") + acc,
    0
  );

  return (
    <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8">
      <Stat
        icon={<HiOutlineViewGrid className="w-20 h-20" />}
        title=" پروژه ها"
        value={numOfProjects}
        color="primary"
      />
      <Stat
        icon={<HiCurrencyDollar className="w-20 h-20" />}
        title="پروژه های واگذار شده"
        value={numOfAcceptedProjects}
        color="green"
      />
      <Stat
        icon={<HiCollection className="w-20 h-20" />}
        title="درخواست ها"
        value={numOfProposal}
        color="yellow"
      />
    </div>
  );
};

export default Stats;
