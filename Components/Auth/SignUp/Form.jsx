import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import React from "react";
import { Fontisto } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Button from "./../../Buttons/Button";
import { useState } from "react";
import AuthPopup from "./../../ModalPopup/Auth/AuthPopup";
import { checkError } from "./../../../Functions/Auth/SingUp/CheckError";

const Form = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Modal Popup
  const [modalVisible, setModalVisible] = useState(false);
  const [validationMessage, setValidationMessage] = useState("");

  const errorImage = "../../../assets/Error/Error.png";

  const { errorFunction, isLoading, error, setError } = checkError();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await errorFunction(email, password);

    isLoading
      ? Alert.alert("Fetching Data", "Please wait...")
      : error
      ? (setModalVisible(true), setValidationMessage(error))
      : (setModalVisible(false),
        navigation.navigate("confirmemail", {
          email: email,
          password: password,
        }));
  };

  console.log("Loading: " + isLoading);

  return (
    <View className="mt-1 w-full items-center">
      <Text className="font-md text-xl text-white">Sign up for free</Text>
      <View className="w-[85%] mt-10">
        <View className="mb-7">
          <Text className="ml-5 mb-2 text-gray-200">Email</Text>
          <TextInput
            className="bg-[#1c2039]  border  text-white text-sm rounded-[50px] block w-full p-4 placeholder-white"
            placeholderTextColor="#000"
            containerStyle={{ marginTop: 10, backgroundColor: "white" }}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>

        <View className="mb-7">
          <Text className="ml-5 mb-2 text-gray-200">Password</Text>
          <TextInput
            className="bg-[#1c2039]  border  text-white text-sm rounded-[50px] block w-full p-4 placeholder-white"
            placeholderTextColor="#000"
            containerStyle={{ marginTop: 10, backgroundColor: "white" }}
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
            secureTextEntry={true}
          />
        </View>

        <View className="mb-7">
          <Button function={handleSubmit} text={"Sign Up"} />
        </View>

        <View className="items-center">
          <Text className="text-gray-200">or continue with</Text>
        </View>

        <View className="flex justify-around flex-row mt-5 mb-7">
          <TouchableOpacity className="bg-[#1c2039]  p-5 h-[70px] rounded-2xl w-[150]">
            <View className="flex-1 flex-row justify-between items-center p-0">
              <Image
                className="w-[40] h-[40]"
                source={require("../../Auth/../../assets/Auth/facebook.png")}
              />
              <Text className="text-[16px] text-white">Facebook</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity className=" bg-[#1c2039]  p-5 h-[70px] rounded-2xl w-[150]">
            <View className="flex-1 flex-row justify-around items-center p-0">
              <Image
                className="w-[40] h-[40]"
                source={require("../../Auth/../../assets/Auth/google.png")}
              />
              <Text className="text-[16px] text-white">Google</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View className="flex justify-center space-x-3 flex-row mt-5">
          <Text className="text-white">Already have an account?</Text>

          <TouchableOpacity
            onPress={() => navigation.navigate("signin")}
            className="items-center"
          >
            <Text className="text-[#075ADE] font-bold">Sign In</Text>
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
