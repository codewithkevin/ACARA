import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const Button = (props) => {
  return (
    <View className="items-center">
      <TouchableOpacity
        onPress={props.function}
        className="items-center mt-5 bg-[#009EFF] w-full p-5 rounded-[45px]"
      >
        <Text className="text-white font-bold text-md">{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
