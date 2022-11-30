import { View, Text, Image, SafeAreaView } from "react-native";
import Form from './../../Components/Auth/Login/Form';

const LogInScreen = () => {
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

export default LogInScreen;
