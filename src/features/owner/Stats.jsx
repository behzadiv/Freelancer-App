import { HiOutlineViewGrid } from "react-icons/hi";

const Stats = ({ projects }) => {
  const numOfProjects = projects.length;
  const numOfProposal = projects.reduce(
    (acc, curr) => acc + curr.proposals.length,
    0
  );

  return (
    <div className="grid grid-cols-3 gap-x-8">
      <div className="col-span-1 grid grid-rows-2 grid-cols-[6.4rem_1fr] p-4 bg-secondary-0 rounded-lg gap-x-4">
        <div className="row-span-2 rounded-full p-2 aspect-square flex items-center justify-center bg-primary-100 text-primary-700">
          <HiOutlineViewGrid className="w-20 h-20" />
        </div>
        <h5 className="font-bold text-lg text-secondary-500 self-center">
          پروژه ها
        </h5>
        <p className="font-bold text-3xl text-secondary-900">{numOfProjects}</p>
      </div>
      <div className="col-span-1"></div>
      <div className="col-span-1"></div>
    </div>
  );
};

export default Stats;
