import { SafeAreaView, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AsyncStorage } from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

//Screens Import
import OnboardingScreen from "./Onboarding";
import SignUpScreen from "./../../Screens/Auth/SignUp/SignUpScreen";
import LogInScreen from "./../../Screens/Auth/Login/LogInScreen";
import InterestScreen from "./../../Screens/Auth/Interest/InterestScreen";
import ProfileScreen from "./../../Screens/Auth/Profile/ProfileScreen";
import ConfirmEmail from "./../../Screens/Auth/ConfirmEmail";

//Function Import
import { CheckFirstLanch } from "./../../Functions/App/CheckFirstLanuch";
import { useThemeContext } from "./../../Hooks/useThemeContext";
import LocationScreen from "./../../Screens/Auth/LocationScreen";

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  const { check, isAppFirstLaunched, isloading } = CheckFirstLanch();

  const { theme } = useThemeContext();

  useEffect(() => {
    check();
  }, []);

  return (
    <NavigationContainer theme={theme}>
      {isloading == false ? null : (
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
            options={{ headerShown: false }}
            name="profile"
            component={ProfileScreen}
          />
          <Stack.Screen
            options={{ headerShown: false, gestureEnabled: false }}
            name="signup"
            component={SignUpScreen}
          />
          <Stack.Screen
            options={{ headerShown: false, gestureEnabled: false }}
            name="try"
            component={LocationScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="confirmemail"
            component={ConfirmEmail}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="signin"
            component={LogInScreen}
          />
          <Stack.Screen
            options={{ headerShown: false, gestureEnabled: false }}
            name="interest"
            component={InterestScreen}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
