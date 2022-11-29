import RootNavigation from "./Navigation/index";
import { useState, useEffect } from "react";
import LoadingScreen from './Screens/LoadinScreen';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return <>{loading ? <LoadingScreen /> : <RootNavigation />}</>;
}
