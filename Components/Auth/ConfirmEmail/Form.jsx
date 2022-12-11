import React, { useState } from "react";
import { View, Text, TouchableWithoutFeedback, TextInput } from "react-native";

const Form = (props) => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");

  props.setConfirm(`${input1}${input2}${input3}${input4}`);

  return (
    <View className="flex flex-row justify-between">
      <TextInput
        maxLength={1}
        keyboardType="numeric"
        value={input1}
        className="bg-[#1c2039] border  text-white text-sm  block w-[70] rounded-2xl p-7 placeholder-white"
        onChangeText={(text) => setInput1(text)}
      />
      <TextInput
        className="bg-[#1c2039]  border  text-white text-sm  block w-[70] rounded-2xl p-7 placeholder-white"
        maxLength={1}
        keyboardType="numeric"
        value={input2}
        onChangeText={(text) => setInput2(text)}
      />
      <TextInput
        className="bg-[#1c2039]  border  text-white text-sm  block w-[70] rounded-2xl p-7 placeholder-white"
        maxLength={1}
        keyboardType="numeric"
        value={input3}
        onChangeText={(text) => setInput3(text)}
      />
      <TextInput
        className="bg-[#1c2039]  border  text-white text-sm  block w-[70] rounded-2xl p-7 placeholder-white"
        maxLength={1}
        keyboardType="numeric"
        value={input4}
        onChangeText={(text) => setInput4(text)}
      />
    </View>
  );
};

export default Form;
