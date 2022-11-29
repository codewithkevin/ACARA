import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

//Screens Import
import Main from "./../../Components/Auth/Onboarding/Main";
import SecondScreen from "./../../Components/Auth/Onboarding/SecondScreen";
import LastScreen from "./../../Components/Auth/Onboarding/LastScreen";

const Stack = createNativeStackNavigator();

const OnboardingScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="MainOnboardingScreen"
        component={Main}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="SecondScreen"
        component={SecondScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="LastScreen"
        component={LastScreen}
      />
    </Stack.Navigator>
  );
};

export default OnboardingScreen;
