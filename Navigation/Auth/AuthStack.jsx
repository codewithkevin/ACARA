import { SafeAreaView, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Screens Import
import OnboardingScreen from "./Onboarding";
import SignUpScreen from "./../../Screens/Auth/SignUp/SignUpScreen";
import LogInScreen from "./../../Screens/Auth/Login/LogInScreen";
import InterestScreen from "./../../Screens/Auth/Interest/InterestScreen";
import { AsyncStorage } from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";

const Stack = createNativeStackNavigator();

export default function AuthStack() {
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

  useEffect(() => {
    check();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={`${
          isAppFirstLaunched ? "OnboardingScreens" : "signup"
        }`}
      >
        <Stack.Screen
          options={{ headerShown: false }}
          name="OnboardingScreens"
          component={OnboardingScreen}
        />
        <Stack.Screen
          options={{ headerShown: false, gestureEnabled: false }}
          name="signup"
          component={SignUpScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="signin"
          component={LogInScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="interest"
          component={InterestScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
