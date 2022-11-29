import { SafeAreaView, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Screens Import
import OnboardingScreen from "./Onboarding";

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="setup">
        <Stack.Screen
          options={{ headerShown: false }}
          name="OnboardingScreens"
          component={OnboardingScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
