import RootNavigation from "./Navigation/index";
import { useState, useEffect } from "react";
import LoadingScreen from './Screens/LoadinScreen';

import AuthContextProvider from "./Context/AuthContext"
export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return <AuthContextProvider>{loading ? <LoadingScreen /> : <RootNavigation />}</AuthContextProvider>;
}
