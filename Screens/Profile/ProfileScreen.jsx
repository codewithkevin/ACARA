import { SafeAreaView, Text, View } from "react-native";
import React from "react";
import Title from "./../../Components/Profile/Title";
import UserProfile from "./../../Components/Profile/UserProfile";

const ProfileScreen = () => {
  return (
    <SafeAreaView className="ml-4">
      <Title />
      <View className="p-5 mt-5">
        <UserProfile />
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
