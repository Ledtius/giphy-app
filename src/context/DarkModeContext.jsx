import { createContext, useState } from "react";

export const DarkModeContext = createContext("light");

export const DarModeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "system");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

    localStorage.setItem("theme", theme);
  };

  return (
    <DarkModeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </DarkModeContext.Provider>
  );
};
