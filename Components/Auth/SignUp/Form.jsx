import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  StyleSheet,
} from "react-native";
import React from "react";
import { Fontisto } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Button from "./../../Buttons/Button";
import { useState, useRef } from "react";
import AuthPopup from "./../../ModalPopup/Auth/AuthPopup";
import { checkError } from "./../../../Functions/Auth/SingUp/CheckError";
import tw from "react-native-tailwindcss";
import { Input } from "@rneui/themed";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const Form = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const inputRef = useRef(null);

  //Modal Popup
  const [modalVisible, setModalVisible] = useState(false);
  const [validationMessage, setValidationMessage] = useState("");

  const errorImage = "../../../assets/Error/Error.png";

  const { errorFunction, isLoading, error, setError, setIsLoading } =
    checkError();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await errorFunction(email, password);

    isLoading
      ? null
      : error
      ? (setModalVisible(true), setValidationMessage(error), setIsLoading(null))
      : (setModalVisible(false),
        navigation.navigate("confirmemail", {
          email: email,
          password: password,
        }),
        setIsLoading(null));
  };

  console.log("Loading: " + isLoading);
  const rightIconStyles = {
    marginRight: 100,
  };

  return (
    <View className="mt-1 w-full items-center">
      <Text className="font-md text-xl text-white">Sign up for free</Text>
      <View className="w-[90%] mt-10">
        <View>
          <Text className="ml-7 mb-2 text-gray-200">Email</Text>
          <Input
            ref={inputRef}
            inputContainerStyle={{
              backgroundColor: "#1c2039",
              borderColor: "#1c2039",
              color: "white",
              fontSize: 12,
              borderRadius: 50,
              width: "100%",
              padding: 1,
              placeholderTextColor: "white",
              marginLeft: 4,
            }}
            placeholder={"Email"}
            placeholderTextColor={"white"}
            placeholderTextColor={"#797a7c"}
            autoComplete="email"
            autoCapitalize="none"
            keyboardType="email-address"
            textContentType="emailAddress"
            inputStyle={{ color: "white", marginLeft: 10 }}
            value={email}
            onChangeText={(text) => setEmail(text)}
            autoCorrect={false}
            returnKeyType="next"
            returnKeyLabel="next"
            rightIcon={<MaterialIcons name="email" size={24} color="#9e9e9e" />}
          />
        </View>

        <View className="mb-3">
          <Text className="ml-7 mb-2 text-gray-200">Password</Text>
          <Input
            ref={inputRef}
            inputContainerStyle={{
              backgroundColor: "#1c2039",
              borderColor: "#1c2039",
              color: "white",
              fontSize: 12,
              borderRadius: 50,
              width: "100%",
              padding: 1,
              placeholderTextColor: "white",
              marginLeft: 4,
            }}
            placeholder={"Password"}
            placeholderTextColor={"#797a7c"}
            keyboardType="default"
            textContentType="password"
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="next"
            returnKeyLabel="next"
            inputStyle={{ color: "white", marginLeft: 10 }}
            value={password}
            onChangeText={(text) => setPassword(text)}
            autoCorrect={false}
            returnKeyType="next"
            returnKeyLabel="next"
            rightIcon={
              <Entypo name="eye-with-line" size={24} color="#9e9e9e" />
            }
            secureTextEntry
          />
        </View>

        <View className="mb-7">
          <Button
            function={handleSubmit}
            text={`${isLoading == null ? "Sign Up" : "Loading..."}`}
          />
        </View>

        <View className="items-center">
          <Text className="text-gray-200">or continue with</Text>
        </View>

        <View className="flex justify-around flex-row mt-9 mb-4">
          <TouchableOpacity className=" bg-[#1c2039] h-[60px] rounded-2xl w-[170]">
            <View className="flex-1 flex-row justify-center space-x-4 items-center p-0">
              <Image
                className="w-[40] h-[40]"
                source={require("../../Auth/../../assets/Auth/facebook.png")}
              />
              <Text className="text-[16px] text-white">Facebook</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity className=" bg-[#1c2039] h-[60px] rounded-2xl w-[170]">
            <View className="flex-1 flex-row justify-center space-x-4 items-center p-0">
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
            <Text className="text-[#406297] font-bold">Sign In</Text>
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

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#fafafa",
    borderRadius: 10,
    padding: 10,
  },
});
