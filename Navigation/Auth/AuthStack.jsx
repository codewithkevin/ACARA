import { SafeAreaView, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Screens Import
import OnboardingScreen from "./Onboarding";
import SignUpScreen from "./../../Screens/Auth/SignUp/SignUpScreen";
import LogInScreen from "./../../Screens/Auth/Login/LogInScreen";
import InterestScreen from "./../../Screens/Auth/Interest/InterestScreen";
import { AsyncStorage } from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { CheckFirstLanch } from "./../../Functions/App/CheckFirstLanuch";

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  const { check, isAppFirstLaunched, isloading } = CheckFirstLanch();

  useEffect(() => {
    check();
  }, []);

  return (
    <NavigationContainer>
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
      )}
    </NavigationContainer>
  );
}
