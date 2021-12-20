import React, { useState } from "react";
import { createContext, useContext } from "react";

const ThemeContext = createContext();

const useThemeContext = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
  const systemDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  // localStorage.setItem("prefersDark", systemDark);

  const prefersDark = localStorage.getItem("prefersDark");
  console.log(prefersDark);
  const updateTheme = (theme) => {
    if (theme === "light") localStorage.setItem("prefersDark", false);
    else if (theme === "dark") localStorage.setItem("prefersDark", true);
    else localStorage.setItem("prefersDark", systemDark);
  };

  return (
    <ThemeContext.Provider value={{ prefersDark, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { useThemeContext, ThemeProvider };
