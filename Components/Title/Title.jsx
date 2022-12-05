import { View, Text, TouchableOpacity, Image } from "react-native";
import React from 'react'

const Title = (props) => {
  return (
    <View className="h-[70px] w-full">
      <View className="flex-1 flex-row space-x-2 items-center p-0">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            className="w-[30] h-[30]"
            source={require("../../assets/Arrows/backarrow.png")}
          />
        </TouchableOpacity>
        <View className="p-0 mt-2">
          <Text className="text-[20px] font-bold">{props.header}</Text>
          <Text className="text-gray-500">{props.text}</Text>
        </View>
      </View>
    </View>
  );
}

export default Title