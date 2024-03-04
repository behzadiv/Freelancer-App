import { HiOutlineLogout } from "react-icons/hi";
import useLogout from "./useLogout";

const LogOut = () => {
  const { isPending, logout } = useLogout();
  return (
    <button onClick={() => logout()}>
      <HiOutlineLogout className="w-5 h-5 text-primary-900 hover:text-error cursor-pointer" />
    </button>
  );
};

export default LogOut;
