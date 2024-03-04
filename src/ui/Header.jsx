import UserAvatar from "../features/authentication/UserAvatar";
import useUser from "../features/authentication/useUser";
import HeaderMenu from "./HeaderMenu";

const Header = () => {
  const { isLoading } = useUser();

  return (
    <div className="bg-secondary-0 px-8 py-4 border-b border-secondary-200">
      <div
        className={`container xl:max-w-screen-lg flex items-center justify-end gap-x-4
       ${isLoading ? "blur-sm opacity-50" : ""}
      `}
      >
        <UserAvatar />
        <HeaderMenu />
      </div>
    </div>
  );
};

export default Header;
