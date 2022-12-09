import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Theme, DefaultTheme } from "react-native-paper";

//Screens Import
import Main from "./../../Components/Auth/Onboarding/Main";
import SecondScreen from "./../../Components/Auth/Onboarding/SecondScreen";
import LastScreen from "./../../Components/Auth/Onboarding/LastScreen";
import { useState } from 'react';

const Stack = createNativeStackNavigator();

const darkTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#011928",
    border: "#575c66",
    backgroundAlt: "#575c66",
    borderAlt: "#2E3440",
    text: "white",
  },
};

const OnboardingScreen = () => {
  const [theme, setTheme] = useState(darkTheme);

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
