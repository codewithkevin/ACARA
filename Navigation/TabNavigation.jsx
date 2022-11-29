import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Icons Support
import { Octicons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

//Screens Import
import HomeScreen from "../Screens/HomeScreen";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  const [show, setShow] = useState(true);

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: {
          borderTopWidth: 0,
          display: "flex",
          flexDirection: "row",
        },
        tabBarLabelPosition: "beside-icon",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: makeIconRender("home-outline"),
          headerShown: false,
          showLabel: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;

function makeIconRender(name) {
  return ({ color, size }) => (
    <MaterialCommunityIcons name={name} color={color} size={size} />
  );
}

function Icon(name) {
  return ({ color, size }) => (
    <Octicons name={name} color={color} size={size} />
  );
}
