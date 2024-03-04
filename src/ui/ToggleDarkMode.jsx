import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { useDarkMode } from "../context/DarkModeProvider";

const ToggleDarkMode = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button onClick={toggleDarkMode}>
      {isDarkMode ? (
        <HiOutlineSun className="w-5 h-5 text-primary-900 cursor-pointer" />
      ) : (
        <HiOutlineMoon className="w-5 h-5 text-primary-900 cursor-pointer" />
      )}
    </button>
  );
};

export default ToggleDarkMode;
