import { View, Text, Image, SafeAreaView } from "react-native";
import Form from './../../../Components/Auth/Login/Form';

const LogInScreen = () => {
  return (
    <SafeAreaView className="flex-1 items-center w-full">
      <Image
        className="w-[200] h-[200]"
        source={require("../../../assets/Loading/1.png")}
      />
      <Form />
    </SafeAreaView>
  );
};

export default LogInScreen;
