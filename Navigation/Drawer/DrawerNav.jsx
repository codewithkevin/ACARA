import {
  createDrawerNavigator,
  DrawerItem,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Button, View, useWindowDimensions } from "react-native";

//Cusmtomize
// import { DrawerContent } from "./DrawerContent";
import React, { useContext } from "react";
import SettingsScreen from "./../../Screens/Settings/SettingsScreen";
import TabNavigation from "./../TabNavigation";
import { useThemeContext } from "./../../Hooks/useThemeContext";

const Drawer = createDrawerNavigator();

export default function Menu() {
  const { theme } = useThemeContext();

  const dimensions = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: dimensions.width >= 768 ? "permanent" : "front",
        drawerStyle: {
          backgroundColor: "#131629",
          width: "100%",
        },
      }}
      useLegacyImplementation={true}
      drawerContent={(props) => <SettingsScreen {...props} />}
      initialRouteName="tabnavigation"
    >
      <Drawer.Screen
        options={{ drawerLabel: "Home", headerShown: false }}
        name="tabnavigation"
        component={TabNavigation}
      />
    </Drawer.Navigator>
  );
}
