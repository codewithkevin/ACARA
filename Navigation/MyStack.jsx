import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useThemeContext } from "./../Hooks/useThemeContext";

//Screens Import
import TabNavigation from "./TabNavigation";

const Stack = createNativeStackNavigator();

const MyStack = () => {
  const { theme } = useThemeContext();
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="TabNavigation"
          component={TabNavigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
