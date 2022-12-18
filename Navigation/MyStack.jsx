import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useThemeContext } from "./../Hooks/useThemeContext";

//Screens Import
import TabNavigation from "./TabNavigation";
import Menu from "./Drawer/DrawerNav";

const Stack = createNativeStackNavigator();

const MyStack = () => {
  const { theme } = useThemeContext();
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="menu"
          component={Menu}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
