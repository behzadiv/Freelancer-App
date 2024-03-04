import {
  HiLightBulb,
  HiOutlineSun,
  HiOutlineUser,
  HiOutlineUserCircle,
  HiUser,
} from "react-icons/hi";
import { Link } from "react-router-dom";
import LogOut from "../features/authentication/LogOut";

const HeaderMenu = () => {
  return (
    <div>
      <ul className="flex items-center justify-center gap-x-4">
        <li>
          <Link to="dashboard">
            <HiOutlineUser className="w-5 h-5 text-primary-900" />
          </Link>
        </li>
        <li>
          <HiOutlineSun className="w-5 h-5 text-primary-900 cursor-pointer" />
        </li>
        <li>
          <LogOut />
        </li>
      </ul>
    </div>
  );
};

export default HeaderMenu;
