import {
  createDrawerNavigator,
  DrawerItem,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Button, View, useWindowDimensions } from "react-native";

//Cusmtomize
import { DrawerContent } from "./DrawerContent";
import { ThemeContext } from "./../context/ThemeContext";
import React, { useContext } from "react";
import Bottom from "./TabNavigation";

const Drawer = createDrawerNavigator();

export default function Menu() {
  const { isSwitchOn } = React.useContext(ThemeContext);

  const dimensions = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: dimensions.width >= 768 ? "permanent" : "front",
        drawerStyle: {
          backgroundColor: isSwitchOn === true ? "#011928" : "#F5F5F5",
          width: 280,
        },
      }}
      useLegacyImplementation={true}
      drawerContent={(props) => <DrawerContent {...props} />}
      initialRouteName="Home"
    >
      <Drawer.Screen
        options={{ drawerLabel: "Home", headerShown: false }}
        name="movietime"
        component={Bottom}
      />
    </Drawer.Navigator>
  );
}
