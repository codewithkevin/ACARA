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
import MultipleSelect from "react-native-multiple-select";
import { MultipleSelectList } from "react-native-dropdown-select-list";
import { useState } from "react";
import DatePicker from "./DatePicker";

const AboutEventTextInput = (props) => {
  return (
    <TextInput
      {...props}
      className="bg-[#1c2039] h-48  border  text-white text-sm rounded-lg block w-full p-4 placeholder-white"
      placeholderTextColor="#D7D6D6"
      containerStyle={{ marginTop: 10, backgroundColor: "white" }}
      editable
      maxLength={40}
      multiline={true}
    />
  );
};

const EventContent = () => {
  const [selected, setSelected] = useState([]);

  const data = [
    { key: "1", value: "Mobiles", disabled: false },
    { key: "2", value: "Appliances" },
    { key: "3", value: "Cameras" },
    { key: "4", value: "Computers", disabled: false },
    { key: "5", value: "Vegetables" },
    { key: "6", value: "Diary Products" },
    { key: "7", value: "Drinks" },
  ];

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
              <Text className="ml-3 mt-5 mb-3 text-gray-200">
                Event Name<Text className="text-red-600">*</Text>
              </Text>
              <TextInput
                className="bg-[#1c2039] border  text-white text-sm rounded-[50px] block w-full p-4 placeholder-white"
                placeholderTextColor="#000"
                containerStyle={{ marginTop: 10, backgroundColor: "white" }}
              />
            </View>

            <View className="mb-2">
              <Text className="ml-3 mt-5 mb-3 text-gray-200">
                Event Types<Text className="text-red-600">*</Text>
              </Text>
              <MultipleSelectList
                setSelected={(val) => setSelected(val)}
                data={data}
                save="value"
                onSelect={() => alert(selected)}
                label="Categories"
                dropdownTextStyles={{ color: "white" }}
                inputStyles={{ color: "white" }}
                style={{ color: "white" }}
                arrowicon={<AntDesign name="down" size={22} color={"white"} />}
                searchicon={
                  <AntDesign name="search1" size={24} color="white" />
                }
                closeicon={<AntDesign name="close" size={24} color="white" />}
                placeholder="Event Types"
                boxStyles={{
                  backgroundColor: "#1c2039",
                  borderRadius: 50,
                  borderWidth: 1,
                  borderColor: "black",
                  paddingTop: 16,
                  paddingRight: 16,
                  paddingBottom: 16,
                  paddingLeft: 16,
                }}
              />
            </View>

            <View className="mb-2">
              <Text className="ml-3 mt-5 mb-3 text-gray-200">
                Select Date<Text className="text-red-600">*</Text>
              </Text>
              <DatePicker />
            </View>

            <View className="mb-2">
              <Text className="ml-3 mt-5 mb-3 text-gray-200">
                Select Hours<Text className="text-red-600">*</Text>
              </Text>
              <TextInput
                className="bg-[#1c2039] border  text-white text-sm rounded-[50px] block w-full p-4 placeholder-white"
                placeholderTextColor="#000"
                containerStyle={{ marginTop: 10, backgroundColor: "white" }}
              />
            </View>

            <View className="mb-2">
              <Text className="ml-3 mt-5 mb-3 text-gray-200">
                Add Location<Text className="text-red-600">*</Text>
              </Text>
              <TextInput
                className="bg-[#1c2039] border  text-white text-sm rounded-[50px] block w-full p-4 placeholder-white"
                placeholderTextColor="#000"
                containerStyle={{ marginTop: 10, backgroundColor: "white" }}
              />
            </View>

            <View className="mb-2">
              <Text className="ml-3 mt-5 mb-3 text-gray-200">
                Add Location Details<Text className="text-red-600">*</Text>
              </Text>
              <TextInput
                className="bg-[#1c2039] border  text-white text-sm rounded-[50px] block w-full p-4 placeholder-white"
                placeholderTextColor="#000"
                containerStyle={{ marginTop: 10, backgroundColor: "white" }}
              />
            </View>

            <View className="mb-2">
              <Text className="ml-3 mt-5 mb-3 text-gray-200">
                About Event<Text className="text-red-600">*</Text>
              </Text>
              <AboutEventTextInput
                multiline
                numberOfLines={4}
                style={{ padding: 10 }}
              />
            </View>
          </View>

          <View className="border-t-2 border-[#3333] mr-4" />

          <View className="flex mt-5 mr-2 mb-5">
            <Text className="text-white font-semibold text-lg">
              Ticks and Payment
            </Text>

            <View className="mb-2">
              <Text className="ml-3 mt-5 mb-3 text-gray-200">
                Ticket Price For VIP <Text className="text-red-600">*</Text>
              </Text>
              <TextInput
                className="bg-[#1c2039] border  text-white text-sm rounded-[50px] block w-full p-4 placeholder-white"
                placeholderTextColor="#000"
                containerStyle={{ marginTop: 10, backgroundColor: "white" }}
              />
            </View>

            <View className="mb-2">
              <Text className="ml-3 mt-5 mb-3 text-gray-200">
                Ticket Price For Economy <Text className="text-red-600">*</Text>
              </Text>
              <TextInput
                className="bg-[#1c2039] border  text-white text-sm rounded-[50px] block w-full p-4 placeholder-white"
                placeholderTextColor="#000"
                containerStyle={{ marginTop: 10, backgroundColor: "white" }}
              />
            </View>

            <View className="mb-2">
              <Text className="ml-3 mt-5 mb-3 text-gray-200">
                Choose Ticket Purchase Deadline{" "}
                <Text className="text-red-600">*</Text>
              </Text>
              <TextInput
                className="bg-[#1c2039] border  text-white text-sm rounded-[50px] block w-full p-4 placeholder-white"
                placeholderTextColor="#000"
                containerStyle={{ marginTop: 10, backgroundColor: "white" }}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default EventContent;
