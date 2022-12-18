import { SafeAreaView, Text, View, ScrollView } from "react-native";
import React from "react";
import Title from "./../../Components/Profile/Title";
import UserProfile from "./../../Components/Profile/UserProfile";

const ProfileScreen = () => {
  return (
    <SafeAreaView className="ml-4 h-full">
      <Title />
      <ScrollView>
        <View className="p-5">
          <UserProfile />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
