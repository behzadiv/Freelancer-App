import { NavLink } from "react-router-dom";
import { HiHome, HiCollection } from "react-icons/hi";

const Sidebar = ({ children }) => {
  return (
    <div className="bg-secondary-0 row-start-1 row-span-2 border border-slate-100 pt-8 flex justify-center">
      <ul className="w-11/12 space-y-2">{children}</ul>
    </div>
  );
};

export default Sidebar;
