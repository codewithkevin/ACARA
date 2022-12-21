import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useContext } from "react";
import EventContent from "./../../Components/EventContent";

const Stack = createNativeStackNavigator();

export default function StaFckNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="EventForm">
        <Stack.Screen
          options={{ headerShown: false }}
          name="EventForm"
          component={EventContent}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
