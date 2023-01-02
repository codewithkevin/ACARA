import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import Title from "./../../Components/Title/Title";
import { Ionicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useLogout } from "./../../Hooks/Auth/Logout/useLogout";
import { useNavigation } from "@react-navigation/native";

const SettingsScreen = () => {
  const { logout } = useLogout();

  const navigation = useNavigation();

  const handleLogout = () => {
    logout();
  };

  return (
    <SafeAreaView className="flex-1 ml-5">
      <Title header={"Settings"} />
      <View className="border-t-2 border-[#333] mr-4" />

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View className="mt-4">
          <View className="flex-row space-x-4 items-center p-0 justify-between">
            <View className="flex flex-row items-center space-x-4">
              <View className="bg-[#191e3e] p-3 rounded-full">
                <Ionicons name="person" size={24} color="#6475ff" />
              </View>
              <Text className="text-[15px] font-md text-white">
                Edit Profile
              </Text>
            </View>

            <View className="p-0 mt-3 mr-4">
              <MaterialIcons
                name="keyboard-arrow-right"
                size={29}
                color="#6475ff"
              />
            </View>
          </View>
          <View className="border-t-2 border-[#333] mr-4 mt-5" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View className="mt-4">
          <View className="flex-row space-x-4 items-center p-0 justify-between">
            <View className="flex flex-row items-center space-x-4">
              <View className="bg-[#191e3e] p-3 rounded-full">
                <FontAwesome name="bell" size={24} color="#6475ff" />
              </View>
              <Text className="text-[15px] font-md text-white">
                Notification
              </Text>
            </View>

            <View className="p-0 mt-3 mr-4">
              <MaterialIcons
                name="keyboard-arrow-right"
                size={29}
                color="#6475ff"
              />
            </View>
          </View>
          <View className="border-t-2 border-[#333] mr-4 mt-5" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View className="mt-4">
          <View className="flex-row space-x-4 items-center p-0 justify-between">
            <View className="flex flex-row items-center space-x-4">
              <View className="bg-[#191e3e] p-3 rounded-full">
                <Ionicons name="lock-closed" size={24} color="#6475ff" />
              </View>
              <Text className="text-[15px] font-md text-white">Security</Text>
            </View>

            <View className="p-0 mt-3 mr-4">
              <MaterialIcons
                name="keyboard-arrow-right"
                size={29}
                color="#6475ff"
              />
            </View>
          </View>
          <View className="border-t-2 border-[#333] mr-4 mt-5" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View className="mt-4">
          <View className="flex-row space-x-4 items-center p-0 justify-between">
            <View className="flex flex-row items-center space-x-4">
              <View className="bg-[#191e3e] p-3 rounded-full">
                <Ionicons name="md-eye" size={24} color="#6475ff" />
              </View>
              <Text className="text-[15px] font-md text-white">Apperence</Text>
            </View>

            <View className="p-0 mt-3 mr-4">
              <MaterialIcons
                name="keyboard-arrow-right"
                size={29}
                color="#6475ff"
              />
            </View>
          </View>
          <View className="border-t-2 border-[#333] mr-4 mt-5" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Help")}>
        <View className="mt-4">
          <View className="flex-row space-x-4 items-center p-0 justify-between">
            <View className="flex flex-row items-center space-x-4">
              <View className="bg-[#191e3e] p-3 rounded-full">
                <AntDesign name="exclamationcircle" size={24} color="#6475ff" />
              </View>
              <Text className="text-[15px] font-md text-white">Help</Text>
            </View>

            <View className="p-0 mt-3 mr-4">
              <MaterialIcons
                name="keyboard-arrow-right"
                size={29}
                color="#6475ff"
              />
            </View>
          </View>
          <View className="border-t-2 border-[#333] mr-4 mt-5" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View className="mt-4">
          <View className="flex-row space-x-4 items-center p-0 justify-between">
            <View className="flex flex-row items-center space-x-4">
              <View className="bg-[#191e3e] p-3 rounded-full">
                <Ionicons name="people" size={24} color="#6475ff" />
              </View>
              <Text className="text-[15px] font-md text-white">
                Invite Friends
              </Text>
            </View>

            <View className="p-0 mt-3 mr-4">
              <MaterialIcons
                name="keyboard-arrow-right"
                size={29}
                color="#6475ff"
              />
            </View>
          </View>
          <View className="border-t-2 border-[#333] mr-4 mt-5" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleLogout}>
        <View className="mt-4">
          <View className="flex-row space-x-4 items-center p-0 justify-between">
            <View className="flex flex-row items-center space-x-4">
              <View className="bg-[#191e3e] p-3 rounded-full">
                <MaterialIcons name="logout" size={24} color="red" />
              </View>
              <Text className="text-[15px] font-md text-white">Logout</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SettingsScreen;
