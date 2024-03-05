import { createContext, useContext, useEffect, useState } from "react";

const DarkModeContext = createContext();

const DarkModeProvider = ({ children }) => {
  const storedValue = JSON.parse(localStorage.getItem("isDarkMode"));
  
  const [isDarkMode, setIsDarkMode] = useState(storedValue || false);
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
    if (!isDarkMode) {
      document.documentElement.classList.add("dark-mode");
      localStorage.setItem("isDarkMode", JSON.stringify(true));
    } else {
      document.documentElement.classList.remove("dark-mode");
      localStorage.setItem("isDarkMode", JSON.stringify(false));
    }
  };
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark-mode");
    } else {
      document.documentElement.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeProvider;

export function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (context === undefined)
    throw new Error("useDarkMode was used outside of DarkModeProvider");
  return context;
}
