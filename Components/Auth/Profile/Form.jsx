import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Fontisto } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Button from "./../../Buttons/Button";
import { useState } from "react";
import AuthPopup from "./../../ModalPopup/Auth/AuthPopup";
import { useLogin } from "./../../../Hooks/Auth/Login/useLogin";
import { useError } from "./../../../Hooks/Auth/Login/useError";

import { Chip } from "react-native-paper";

const Form = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [gender, setGender] = useState("");
  const [name, setName] = useState("");

  //Modal Popup
  const [modalVisible, setModalVisible] = useState(false);
  const [validationMessage, setValidationMessage] = useState("");

  const errorImage = "../../../assets/Error/Error.png";

  const { login, isLoading, error, userEmail } = useLogin();
  const { errorCheck } = useError();

  const handleSubmit = async (e) => {
    e.preventDefault();

    errorCheck(error, setModalVisible, setValidationMessage);

    await login(email, password);
    const something = await userEmail;
  };
  return (
    <View className="mt-1 w-full">
      <View className="mb-7">
        <Text className="ml-5 mb-2 text-gray-400">Full Name</Text>
        <TextInput
          className="bg-gray-100 border border-[#075ADE] text-black text-sm rounded-[50px] block w-full p-3"
          placeholderTextColor="#000"
          containerStyle={{ marginTop: 10, backgroundColor: "white" }}
          value={name}
          onChangeText={(text) => setName(text)}
        />
      </View>

      <View className="mb-7">
        <Text className="ml-5 mb-2 text-gray-400">Username</Text>
        <TextInput
          className="bg-gray-100 border border-[#075ADE] text-black text-sm rounded-[50px] block w-full p-3 "
          placeholderTextColor="#000"
          containerStyle={{ marginTop: 10, backgroundColor: "white" }}
          value={username}
          onChangeText={(text) => setUsername(text)}
          secureTextEntry
          secureTextEntry={true}
        />
      </View>

      <View className="mb-7">
        <Button function={handleSubmit} text={"Save Account"} />
      </View>

      <AuthPopup
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        validationMessage={validationMessage}
        image={require(errorImage)}
      />
    </View>
  );
};

export default Form;
