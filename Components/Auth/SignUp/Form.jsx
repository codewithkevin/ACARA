import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { Fontisto } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Button from "./../../Buttons/Button";
import { useState } from "react";
import { useSignUp } from "./../../../Hooks/useSignUp";

const Form = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const { signup, isLoading, error, userEmail } = useSignUp();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(email, password, name);
    const something = await userEmail;
    console.log(something);
  };

  return (
    <View className="mt-5 w-full items-center">
      <Text className="font-bold text-lg">Sign up for free</Text>

      <View className="mt-10 w-[85%]">
        <View className="mb-7">
          <Text className="ml-5 mb-3 text-gray-400">Name</Text>
          <TextInput
            className="bg-gray-100 border border-gray-400 text-black text-sm rounded-[50px] block w-full p-4 placeholder-black"
            placeholder="Name"
            placeholderTextColor="#000"
            containerStyle={{ marginTop: 10, backgroundColor: "white" }}
            value={name}
            onChangeText={(text) => setName(text)}
          />
        </View>
        <View className="mb-7">
          <Text className="ml-5 mb-3 text-gray-400">Email</Text>
          <TextInput
            className="bg-gray-100 border border-gray-400 text-black text-sm rounded-[50px] block w-full p-4 placeholder-black"
            placeholder="Email"
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
            placeholder="Password"
            placeholderTextColor="#000"
            containerStyle={{ marginTop: 10, backgroundColor: "white" }}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>

        <View className="mb-7">
          <Button function={handleSubmit} text={"Sign Up"} />
        </View>

        <View className="items-center">
          <Text className="text-gray-600">or continue with</Text>
        </View>

        <View className="flex justify-around flex-row mt-5 mb-7">
          <TouchableOpacity className=" bg-white p-5 h-15 rounded-2xl w-[150]">
            <View className="flex">
              <Fontisto
                name={"google"}
                color={"blue"}
                size={24}
                // onPress={toggleIsLoading}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity className=" bg-gray-300 p-5 rounded-2xl w-[150]">
            <View className="flex">
              <Fontisto
                name={"google"}
                color={"blue"}
                size={24}
                // onPress={toggleIsLoading}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View className="flex justify-center space-x-3 flex-row mt-5">
          <Text className="text-gray-400">Already have an account?</Text>

          <TouchableOpacity
            onPress={() => navigation.navigate("signin")}
            className="items-center"
          >
            <Text className="text-[#075ADE] font-bold">Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Form;
