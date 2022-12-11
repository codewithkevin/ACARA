import RootNavigation from "./Navigation/index";
import { useState, useEffect } from "react";
import LoadingScreen from "./Screens/LoadinScreen";
import { LogBox } from "react-native";

import AuthContextProvider from "./Context/AuthContext";
import ThemeContextProvider from "./Context/ThemeContext";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2500);
  }, []);

  LogBox.ignoreAllLogs();

  return (
    <AuthContextProvider>
      <ThemeContextProvider>
        {loading ? <LoadingScreen /> : <RootNavigation />}
      </ThemeContextProvider>
    </AuthContextProvider>
  );
}
