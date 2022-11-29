import { View, Text, Image, SafeAreaView } from "react-native";
import Form from "./../../Components/Auth/SignUp/Form";


const SignUpScreen = () => {
  return (
    <SafeAreaView className="flex-1 items-center w-full">
      <Image
        className="w-[130] h-[130]"
        source={require("../../assets/Loading/1.png")}
      />
      <Form />
    </SafeAreaView>
  );
};

export default SignUpScreen;
