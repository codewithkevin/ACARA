import { createContext, useState } from "react";
import { Theme, DefaultTheme } from "react-native-paper";

export const ThemeContext = createContext();

const darkTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#131629", 
    border: "#575c66",
    backgroundAlt: "#575c66",
    borderAlt: "#2E3440",
    text: "white",
  },
};

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(darkTheme);

  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
