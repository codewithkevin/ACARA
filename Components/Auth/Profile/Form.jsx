import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Fontisto } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Button from "./../../Buttons/Button";
import { useState } from "react";
import AuthPopup from "./../../ModalPopup/Auth/AuthPopup";
import DropDown from "./../../DropDown";
import { useRoute } from "@react-navigation/native";
import { useSignUp } from "./../../../Hooks/Auth/SignUp/useSignUp";
import ImageUpload from "./ImageUpload";

const Form = () => {
  //ROutes
  const route = useRoute();

  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [genderValue, setGenderValue] = useState(null);

  const email = route.params.email;
  const password = route.params.password;
  const interest = route.params.interest;

  const { signup, isLoading, error } = useSignUp();

  //Modal Popup
  const [modalVisible, setModalVisible] = useState(false);
  const [validationMessage, setValidationMessage] = useState("");

  const errorImage = "../../../assets/Error/Error.png";

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (error) {
      setModalVisible(true);
      setValidationMessage(error);
    }

    await signup(email, password, name, interest, username, genderValue);
  };

  console.log(interest);
  console.log(email);
  console.log(password);

  return (
    <View className="mt-1 w-full">
      <ImageUpload email={email} />
      <View
        className="height-1 mb-7 bg-gray-700"
        style={{
          height: 1,
        }}
      ></View>

      <View className="mb-4">
        <Text className="ml-4 mb-2 text-gray-200">Full Name</Text>
        <TextInput
          className="bg-[#263159] border  text-white text-sm rounded-[50px] block w-full p-4 placeholder-white"
          placeholderTextColor="#000"
          containerStyle={{ marginTop: 10, backgroundColor: "white" }}
          value={name}
          onChangeText={(text) => setName(text)}
        />
      </View>

      <View className="mb-7">
        <Text className="ml-4 mb-2 text-gray-200">Username</Text>
        <TextInput
          className="bg-[#263159] border  text-white text-sm rounded-[50px] block w-full p-4 placeholder-white"
          placeholderTextColor="#000"
          containerStyle={{ marginTop: 10, backgroundColor: "white" }}
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
      </View>

      <View className="mb-[150]">
        <Text className="ml-2 mb-2 text-gray-400">Gender</Text>
        <DropDown genderValue={genderValue} setGenderValue={setGenderValue} />
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
