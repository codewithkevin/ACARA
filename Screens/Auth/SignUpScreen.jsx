import { View, Text, Image, SafeAreaView } from "react-native";
import React from "react";
import Form from "./../../Components/Auth/SignUp/Form";

const SignUpScreen = () => {
  return (
    <SafeAreaView className="flex-1 items-center w-full">
      <Image
        className="w-[200] h-[200]"
        source={require("../../assets/Loading/1.png")}
      />
      <Form />
    </SafeAreaView>
  );
};

export default SignUpScreen;
