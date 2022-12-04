import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Fontisto } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Button from "./../../Buttons/Button";
import { useState } from "react";
import AuthPopup from "./../../ModalPopup/Auth/AuthPopup";
import { useLogin } from "./../../../Hooks/Auth/Login/useLogin";
import { useError } from "./../../../Hooks/Auth/Login/useError";

const Form = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
    <View className="mt-1 w-full items-center">
      <Text className="font-md text-xl mt-14">Sign in to your account</Text>
      <View className="w-[85%] mt-[30]">
        <View className="mb-7">
          <Text className="ml-5 mb-3 text-gray-400">Email</Text>
          <TextInput
            className="bg-gray-100 border border-gray-400 text-black text-sm rounded-[50px] block w-full p-4 placeholder-black"
            placeholderTextColor="#000"
            containerStyle={{ marginTop: 10, backgroundColor: "white" }}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>

        <View className="mb-7">
          <Text className="ml-5 mb-3 text-gray-400">Password</Text>
          <TextInput
            className="bg-gray-100 border border-gray-400 text-black text-sm rounded-[50px] block w-full p-4 placeholder-black"
            placeholderTextColor="#000"
            containerStyle={{ marginTop: 10, backgroundColor: "white" }}
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
            secureTextEntry={true}
          />
        </View>

        <View className="mb-7">
          <Button function={handleSubmit} text={"Log In"} />
        </View>

        <View className="items-center">
          <Text className="text-gray-600">or continue with</Text>
        </View>

        <View className="flex justify-around flex-row mt-5 mb-7">
          <TouchableOpacity className=" bg-white p-5 h-[70px] rounded-2xl w-[150]">
            <View className="flex-1 flex-row justify-between items-center p-0">
              <Image
                className="w-[40] h-[40]"
                source={require("../../Auth/../../assets/Auth/facebook.png")}
              />
              <Text className="text-[16px]">Facebook</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity className=" bg-white p-5 h-[70px] rounded-2xl w-[150]">
            <View className="flex-1 flex-row justify-around items-center p-0">
              <Image
                className="w-[40] h-[40]"
                source={require("../../Auth/../../assets/Auth/google.png")}
              />
              <Text className="text-[16px]">Google</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View className="flex justify-center space-x-3 flex-row mt-5">
          <Text className="text-gray-400">Create a new account.</Text>

          <TouchableOpacity
            onPress={() => navigation.navigate("signup")}
            className="items-center"
          >
            <Text className="text-[#075ADE] font-bold">Sign Up</Text>
          </TouchableOpacity>
        </View>
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
