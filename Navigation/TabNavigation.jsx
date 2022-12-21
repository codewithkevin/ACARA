import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TouchableOpacity, View } from "react-native";

//Icons Support
import { Octicons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

//Screens Import
import HomeScreen from "../Screens/HomeScreen";
import EventsScreen from "./../Screens/Event/EventsScreen";
import LocationScreen from "./../Screens/Location/LocationScreen";
import CalenderScreen from "./../Screens/Calender/CalenderScreen";
import ProfileScreen from "./../Screens/Profile/ProfileScreen";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  const [show, setShow] = useState(true);

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: {
          borderTopWidth: 1,
          padding: 3,
          display: "flex",
          flexDirection: "row",
          height: 100,
          borderTop: 200,
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
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
      <Tab.Screen
        name="Events"
        component={EventsScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: makeIconRender("calendar-month-outline"),
          headerShown: false,
          showLabel: false,
        }}
      />
      <Tab.Screen
        name="Location"
        component={LocationScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: makeIconRender("map"),
          headerShown: false,
          showLabel: false,
        }}
      />
      <Tab.Screen
        name="Calender"
        component={CalenderScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: makeIconRender("calendar-blank"),
          headerShown: false,
          showLabel: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: Icon("person"),
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
    <View
      style={{
        backgroundColor: "#191e3e", // Set your desired color here
        padding: 10,
        borderRadius: 10,
        width: 50,
        marginLeft: 25,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <MaterialCommunityIcons name={name} color={color} size={size} />
    </View>
  );
}

function Icon(name) {
  return ({ color, size }) => (
    <View
      style={{
        backgroundColor: "#191e3e", // Set your desired color here
        padding: 10,
        borderRadius: 10,
        width: 50,
        marginLeft: 25,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Ionicons name={name} color={color} size={size} />
    </View>
  );
}
