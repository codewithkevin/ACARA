import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const CheckFirstLanch = () => {
  const [isAppFirstLaunched, setIsAppFirstLaunched] = useState();
  const [isloading, setIsLoading] = useState(false);

  console.log(isAppFirstLaunched);

  const check = async () => {
    const appData = await AsyncStorage.getItem("isAppFirstLaunched");
    if (appData == null) {
      setIsAppFirstLaunched(true);
      setIsLoading(true);
      // AsyncStorage.removeItem("isAppFirstLaunched");
      await AsyncStorage.setItem("isAppFirstLaunched", "false");
    } else {
      setIsAppFirstLaunched(false);
      setIsLoading(true);
    }
  };

  return { check, isAppFirstLaunched, isloading };
};
