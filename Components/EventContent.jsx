import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import Title from "./Title/Title";
import { AntDesign } from "@expo/vector-icons";

const EventContent = () => {
  return (
    <KeyboardAvoidingView
      behavior="position"
      keyboardVerticalOffset={0}
      className="flex-1"
    >
      <SafeAreaView className="ml-5 mr-5">
        <ScrollView showsVerticalScrollIndicator={false}>
          <Title header={"Create A New Event"} />

          <View className="mb-5">
            <View>
              <TouchableOpacity className="bg-[#1c2039] mb-5 h-[230] rounded-xl flex items-center justify-center">
                <View className="mb-4">
                  <AntDesign name="plus" size={24} color="#6475ff" />
                </View>
                <Text className="text-white">Add Cover Picture</Text>
              </TouchableOpacity>
            </View>

            <View className="flex flex-row justify-between">
              <TouchableOpacity className="bg-[#1c2039] h-20 w-20 rounded-xl flex items-center justify-center">
                <AntDesign name="plus" size={24} color="#6475ff" />
              </TouchableOpacity>

              <TouchableOpacity className="bg-[#1c2039] h-20 w-20 rounded-xl flex items-center justify-center">
                <AntDesign name="plus" size={24} color="#6475ff" />
              </TouchableOpacity>

              <TouchableOpacity className="bg-[#1c2039] h-20 w-20 rounded-xl flex items-center justify-center">
                <AntDesign name="plus" size={24} color="#6475ff" />
              </TouchableOpacity>

              <TouchableOpacity className="bg-[#1c2039] h-20 w-20 rounded-xl flex items-center justify-center">
                <AntDesign name="plus" size={24} color="#6475ff" />
              </TouchableOpacity>
            </View>
          </View>

          <View className="border-t-2 border-[#3333] mr-4" />

          <View className="flex mt-5 mr-2 mb-5">
            <Text className="text-white font-semibold text-lg">
              Event Details
            </Text>

            <View className="mb-2">
              <Text className="ml-3 mt-5 mb-3 text-gray-200">Event Name</Text>
              <TextInput
                className="bg-[#1c2039] border  text-white text-sm rounded-[50px] block w-full p-4 placeholder-white"
                placeholderTextColor="#000"
                containerStyle={{ marginTop: 10, backgroundColor: "white" }}
              />
            </View>

            <View className="mb-2">
              <Text className="ml-3 mt-5 mb-3 text-gray-200">Event Types</Text>
              <TextInput
                className="bg-[#1c2039] border  text-white text-sm rounded-[50px] block w-full p-4 placeholder-white"
                placeholderTextColor="#000"
                containerStyle={{ marginTop: 10, backgroundColor: "white" }}
              />
            </View>

            <View className="mb-2">
              <Text className="ml-3 mt-5 mb-3 text-gray-200">Select Date</Text>
              <TextInput
                className="bg-[#1c2039] border  text-white text-sm rounded-[50px] block w-full p-4 placeholder-white"
                placeholderTextColor="#000"
                containerStyle={{ marginTop: 10, backgroundColor: "white" }}
              />
            </View>

            <View className="mb-2">
              <Text className="ml-3 mt-5 mb-3 text-gray-200">Select Hours</Text>
              <TextInput
                className="bg-[#1c2039] border  text-white text-sm rounded-[50px] block w-full p-4 placeholder-white"
                placeholderTextColor="#000"
                containerStyle={{ marginTop: 10, backgroundColor: "white" }}
              />
            </View>

            <View className="mb-2">
              <Text className="ml-3 mt-5 mb-3 text-gray-200">Add Location</Text>
              <TextInput
                className="bg-[#1c2039] border  text-white text-sm rounded-[50px] block w-full p-4 placeholder-white"
                placeholderTextColor="#000"
                containerStyle={{ marginTop: 10, backgroundColor: "white" }}
              />
            </View>

            <View className="mb-2">
              <Text className="ml-3 mt-5 mb-3 text-gray-200">
                Add Location Details
              </Text>
              <TextInput
                className="bg-[#1c2039] border  text-white text-sm rounded-[50px] block w-full p-4 placeholder-white"
                placeholderTextColor="#000"
                containerStyle={{ marginTop: 10, backgroundColor: "white" }}
              />
            </View>

            <View className="mb-2">
              <Text className="ml-3 mt-5 mb-3 text-gray-200">About Event</Text>
              <TextInput
                className="bg-[#1c2039] h-48  border  text-white text-sm rounded-lg block w-full p-4 placeholder-white"
                placeholderTextColor="#000"
                containerStyle={{ marginTop: 10, backgroundColor: "white" }}
              />
            </View>
          </View>

          <View className="border-t-2 border-[#3333] mr-4" />

          <View className="mt-5 mb-24">
            <Text className="text-white font-semibold text-lg">
              Ticks and Payment 
            </Text>

            
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default EventContent;
