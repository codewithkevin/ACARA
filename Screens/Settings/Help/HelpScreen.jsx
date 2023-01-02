import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Title from "./../../../Components/Title/Title";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const HelpScreen = () => {
  const items = [
    {
      id: "2",
      name: "Instagram",
      icon: <Entypo name="instagram" size={44} color="white" />,
    },
    {
      id: "4",
      name: "Twitter",
      icon: <AntDesign name="twitter" size={44} color="white" />,
    },
    {
      id: "1",
      name: "Website",
      icon: <MaterialCommunityIcons name="web" size={44} color="white" />,
    },
    {
      id: "3",
      name: "Youtube",
      icon: <AntDesign name="youtube" size={44} color="white" />,
    },
  ];

  const screens = [
    {
      id: "1",
      name: "FAQ",
    },
    {
      id: "2",
      name: "Contact Us",
    },
    {
      id: "3",
      name: "Terms & Conditions",
    },
    {
      id: "4",
      name: "Privacy Policy",
    },
    {
      id: "5",
      name: "About Us",
    },
  ];

  return (
    <SafeAreaView className="flex-1 ml-5 mr-5">
      <Title header={"Help"} />
      <View>
        <FlatList
          data={items}
          numColumns={2}
          scrollEnabled={false}
          renderItem={({ item }) => (
            <View className="ml-6 items-center mt-5">
              <TouchableOpacity>
                <View
                  className={`${
                    item.name == "Instagram"
                      ? "bg-[#e73155]"
                      : item.name == "Twitter"
                      ? "bg-[#6374ff]"
                      : item.name == "Youtube"
                      ? "bg-[#e73155]"
                      : item.name == "Website"
                      ? "bg-[#ffc42c]"
                      : "bg-yellow-500"
                  } w-[150] h-[130] rounded-3xl flex justify-center items-center`}
                >
                  {item.icon}
                  <Text className="text-white mt-2 text-md font-normal">
                    {item.name}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
      <View className="border-t-2 border-[#333] mr-4 mt-5" />
      <FlatList
        data={screens}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <View className="mt-4 ml-2">
                <View className="flex-row space-x-4 items-center p-0 justify-between">
                  <Text className="text-[15px] font-md text-white">
                    {item.name}
                  </Text>

                  <View className="p-0 mt-3 mr-4">
                    <MaterialIcons
                      name="keyboard-arrow-right"
                      size={29}
                      color="#6475ff"
                    />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <View className="border-t-2 border-[#333] mr-4 mt-5" />
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default HelpScreen;
