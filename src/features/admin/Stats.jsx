import { HiCollection, HiOutlineViewGrid, HiUserGroup } from "react-icons/hi";
import Stat from "../../ui/Stat";

const Stats = ({ proposals, projects, users }) => {
  return (
    <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8">
      <Stat
        icon={<HiUserGroup className="w-20 h-20" />}
        title="کاربران"
        value={users}
        color="primary"
      />
      <Stat
        icon={<HiOutlineViewGrid className="w-20 h-20" />}
        title="تعداد پروژه ها"
        value={projects}
        color="yellow"
      />
      <Stat
        icon={<HiCollection className="w-20 h-20" />}
        title=" درخواست ها"
        value={proposals}
        color="green"
      />
    </div>
  );
};

export default Stats;
