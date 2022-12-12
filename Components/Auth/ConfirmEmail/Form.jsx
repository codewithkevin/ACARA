import { useState, useRef } from "react";
import { View, Text, TouchableWithoutFeedback, TextInput } from "react-native";

const Form = (props) => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");

  props.setConfirm(`${input1}${input2}${input3}${input4}`);

  const input1Ref = useRef(null);
  const input2Ref = useRef(null);
  const input3Ref = useRef(null);
  const input4Ref = useRef(null);

  const handleInput1Change = (value) => {
    if (value.length === 1) {
      input2Ref.current.focus();
    }
    setInput1(value);
  };

  const handleInput2Change = (value) => {
    if (value.length === 1) {
      input3Ref.current.focus();
    }
    setInput2(value);
  };

  const handleInput3Change = (value) => {
    if (value.length === 1) {
      input4Ref.current.focus();
    }
    setInput3(value);
  };

  const handleInput4Change = (value) => {
    if (value.length === 1) {
      input4Ref.current.focus();
    }
    setInput4(value);
  };

  return (
    <View className="flex flex-row justify-between">
      <TextInput
        ref={input1Ref}
        maxLength={1}
        keyboardType="numeric"
        value={input1}
        className="bg-[#1c2039] border  text-white text-sm  block w-[70] rounded-2xl p-7 placeholder-white"
        onChangeText={handleInput1Change}
      />
      <TextInput
        ref={input2Ref}
        className="bg-[#1c2039]  border  text-white text-sm  block w-[70] rounded-2xl p-7 placeholder-white"
        maxLength={1}
        keyboardType="numeric"
        value={input2}
        onChangeText={handleInput2Change}
      />
      <TextInput
        ref={input3Ref}
        className="bg-[#1c2039]  border  text-white text-sm  block w-[70] rounded-2xl p-7 placeholder-white"
        maxLength={1}
        keyboardType="numeric"
        value={input3}
        onChangeText={handleInput3Change}
      />
      <TextInput
        ref={input4Ref}
        className="bg-[#1c2039]  border  text-white text-sm  block w-[70] rounded-2xl p-7 placeholder-white"
        maxLength={1}
        keyboardType="numeric"
        value={input4}
        onChangeText={handleInput4Change}
      />
    </View>
  );
};

export default Form;
