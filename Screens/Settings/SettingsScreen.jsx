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
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const SettingsScreen = () => {
  return (
    <SafeAreaView className="flex-1 ml-5">
      <Title header={"Settings"} />
      <View className="border-t-2 border-[#333] mr-4" />

      <View className="mt-4">
        <View className="flex-row space-x-4 items-center p-0 justify-between">
          <View>
            <TouchableOpacity
              className="flex flex-row items-center space-x-4"
              onPress={() => navigation.goBack()}
            >
              <View className="bg-[#191e3e] p-3 rounded-full">
                <Ionicons name="person" size={24} color="#6475ff" />
              </View>
              <Text className="text-[15px] font-md text-white">
                Edit Profile
              </Text>
            </TouchableOpacity>
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

      <View className="mt-4">
        <View className="flex-row space-x-4 items-center p-0 justify-between">
          <View>
            <TouchableOpacity
              className="flex flex-row items-center space-x-4"
              onPress={() => navigation.goBack()}
            >
              <View className="bg-[#191e3e] p-3 rounded-full">
                <FontAwesome name="bell" size={24} color="#6475ff" />
              </View>
              <Text className="text-[15px] font-md text-white">
                Notification
              </Text>
            </TouchableOpacity>
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

      <View className="mt-4">
        <View className="flex-row space-x-4 items-center p-0 justify-between">
          <View>
            <TouchableOpacity
              className="flex flex-row items-center space-x-4"
              onPress={() => navigation.goBack()}
            >
              <View className="bg-[#191e3e] p-3 rounded-full">
                <Ionicons name="lock-closed" size={24} color="#6475ff" />
              </View>
              <Text className="text-[15px] font-md text-white">Security</Text>
            </TouchableOpacity>
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

      <View className="mt-4">
        <View className="flex-row space-x-4 items-center p-0 justify-between">
          <View>
            <TouchableOpacity
              className="flex flex-row items-center space-x-4"
              onPress={() => navigation.goBack()}
            >
              <View className="bg-[#191e3e] p-3 rounded-full">
                <Ionicons name="md-eye" size={24} color="#6475ff" />
              </View>
              <Text className="text-[15px] font-md text-white">Apperence</Text>
            </TouchableOpacity>
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

      <View className="mt-4">
        <View className="flex-row space-x-4 items-center p-0 justify-between">
          <View>
            <TouchableOpacity
              className="flex flex-row items-center space-x-4"
              onPress={() => navigation.goBack()}
            >
              <View className="bg-[#191e3e] p-3 rounded-full">
                <Ionicons name="ios-help-outline" size={24} color="#6475ff" />
              </View>
              <Text className="text-[15px] font-md text-white">Help</Text>
            </TouchableOpacity>
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

      <View className="mt-4">
        <View className="flex-row space-x-4 items-center p-0 justify-between">
          <View>
            <TouchableOpacity
              className="flex flex-row items-center space-x-4"
              onPress={() => navigation.goBack()}
            >
              <View className="bg-[#191e3e] p-3 rounded-full">
                <Ionicons name="people" size={24} color="#6475ff" />
              </View>
              <Text className="text-[15px] font-md text-white">
                Invite Friends
              </Text>
            </TouchableOpacity>
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

      <View className="mt-4">
        <View className="flex-row space-x-4 items-center p-0 justify-between">
          <View>
            <TouchableOpacity
              className="flex flex-row items-center space-x-4"
              onPress={() => navigation.goBack()}
            >
              <View className="bg-[#191e3e] p-3 rounded-full">
                <MaterialIcons name="logout" size={24} color="red" />
              </View>
              <Text className="text-[15px] font-md text-white">Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;
