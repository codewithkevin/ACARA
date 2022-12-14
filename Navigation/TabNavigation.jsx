import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TouchableOpacity, View } from "react-native";

//Icons Support
import { Octicons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

//Screens Import
import HomeScreen from "../Screens/HomeScreen";
import EventsScreen from "./../Screens/Event/EventsScreen";
import LocationScreen from "./../Screens/Location/LocationScreen";
import CalenderScreen from "./../Screens/Calender/CalenderScreen";
import ProfileScreen from "./../Screens/Profile/ProfileScreen";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  const [show, setShow] = useState(true);

  const MyTabBarIcon = (props) => {
    return (
      <View
        style={{
          backgroundColor: "#191e3e", // Set your desired color here
          padding: 10,
          borderRadius: 5,
          width: 50,
          marginLeft: 25,
        }}
      >
        <Fontisto
          name={"home"}
          color={"#6475ff"}
          size={24}
          // onPress={toggleIsLoading}
        />
      </View>
    );
  };

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
          tabBarIcon: MyTabBarIcon,
          headerShown: false,
          showLabel: false,
        }}
      />
      <Tab.Screen
        name="Events"
        component={EventsScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: makeIconRender("home-outline"),
          headerShown: false,
          showLabel: false,
        }}
      />
      <Tab.Screen
        name="Location"
        component={LocationScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: makeIconRender("home-outline"),
          headerShown: false,
          showLabel: false,
        }}
      />
      <Tab.Screen
        name="Calender"
        component={CalenderScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: makeIconRender("home-outline"),
          headerShown: false,
          showLabel: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
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
