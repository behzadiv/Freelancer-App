import { NavLink } from "react-router-dom";
import { HiHome, HiCollection } from "react-icons/hi";

const Sidebar = () => {
  return (
    <div className="bg-secondary-0 row-start-1 row-span-2 border border-slate-100 pt-8 flex justify-center">
      <ul className="w-11/12 space-y-2">
        <li>
          <CustomNavLink to={"/owner/dashboard"}>
            <HiHome />
            <span>داشبورد</span>
          </CustomNavLink>
        </li>
        <li>
          <CustomNavLink to={"/owner/projects"}>
            <HiCollection />
            <span>پروژه ها</span>
          </CustomNavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

function CustomNavLink({ children, to }) {
  const navLinkClass =
    "font-bold flex gap-x-2 py-1 px-5 rounded-md items-center hover:bg-primary-100/50 hover:text-primary-900 transition-all duration-300";

  return (
    <NavLink
      to={to}
      className={({ isActive }) => {
        return isActive
          ? `${navLinkClass} bg-primary-50 text-primary-800`
          : `${navLinkClass} text-secondary-600`;
      }}
    >
      {children}
    </NavLink>
  );
}
