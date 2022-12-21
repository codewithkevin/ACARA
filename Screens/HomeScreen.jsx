import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useLogout } from "./../Hooks/Auth/Logout/useLogout";
import UploadEvents from "./../Components/UploadEvents";

const HomeScreen = () => {
  const { logout } = useLogout();

  const handleLogout = () => {
    logout();
  };

  return (
    <View className='flex-1'>
      <UploadEvents />
    </View>
  );
};

export default HomeScreen;
