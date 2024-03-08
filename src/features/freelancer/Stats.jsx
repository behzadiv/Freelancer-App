import {
  HiCollection,
  HiCurrencyDollar,
  HiOutlineViewGrid,
} from "react-icons/hi";
import Stat from "../../ui/Stat";
import toPersianFormat from "../../utils/toPersianFormat";

const Stats = ({ proposals }) => {
  const numOfProposals = proposals.length;
  const AcceptedProposals = proposals.filter((p) => p.status === 2);
  const balance = AcceptedProposals.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8">
      <Stat
        icon={<HiOutlineViewGrid className="w-20 h-20" />}
        title=" درخواست ها"
        value={numOfProposals}
        color="primary"
      />
      <Stat
        icon={<HiCollection className="w-20 h-20" />}
        title="درخواست های تایید شده"
        value={AcceptedProposals.length}
        color="yellow"
      />
      <Stat
        icon={<HiCurrencyDollar className="w-20 h-20" />}
        title="درآمد"
        value={toPersianFormat(balance)}
        color="green"
      />
    </div>
  );
};

export default Stats;
