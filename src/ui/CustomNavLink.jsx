import { NavLink } from "react-router-dom";

export default function CustomNavLink({ children, to }) {
  const navLinkClass =
    "font-bold flex gap-x-2 py-1 px-5 rounded-md items-center hover:bg-primary-100/50 hover:text-primary-900 transition-all duration-300";

  return (
    <li>
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
    </li>
  );
}
