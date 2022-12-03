import {useState} from "react";
import { AsyncStorage } from "@react-native-async-storage/async-storage";

export const CheckFirstLanch = () => {
    const [isAppFirstLaunched, setIsAppFirstLaunched] = useState();

    const check = async () => {
      const appData = await AsyncStorage.getItem("isAppFirstLaunched");
      if (appData == null) {
        setIsAppFirstLaunched(true);
        AsyncStorage.setItem("isAppFirstLaunched", "false");
      } else {
        setIsAppFirstLaunched(false);
      }
    };

    return { check, isAppFirstLaunched };
}