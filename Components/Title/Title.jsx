import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";

const Title = (props) => {
  const navigation = useNavigation();

  return (
    <View className="h-[70px] w-full">
      <View className="flex-1 flex-row space-x-4 items-center p-0">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            className="w-[30] h-[30]"
            source={require("../../assets/Arrows/backarrow.png")}
          />
        </TouchableOpacity>
        <View className="p-0 mt-3">
          <Text className="text-[20px] font-md text-white">
            {props.header}
          </Text>
          <Text className="text-gray-200">{props.text}</Text>
        </View>
      </View>
    </View>
  );
};

export default Title;
