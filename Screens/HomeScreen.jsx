import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useLogout } from "./../Hooks/useLogout";

const HomeScreen = () => {
  const { logout } = useLogout();

  const handleLogout = () => {
    logout();
  };

  return (
    <View className="flex-1 justify-center items-center">
      <TouchableOpacity
        onPress={handleLogout}
        className="items-center mt-5 bg-[#009EFF] w-80 p-5 rounded-[45px]"
      >
        <Text className="text-white font-bold text-md">Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
