import { useContext } from "react";
import { ThemeContext } from "./../Context/ThemeContext";

export const useThemeContext = () => {
  const context = useContext(ThemeContext);

   if (!context) {
    throw Error("useTheme must be used inside an ThemeContextProvider");
  }

  return context;
};
