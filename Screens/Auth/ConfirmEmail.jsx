import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Title from "./../../Components/Title/Title";
import { useRoute } from "@react-navigation/native";
import Form from "./../../Components/Auth/ConfirmEmail/Form";
import Button from "./../../Components/Buttons/Button";

const ConfirmEmail = () => {
  //ROutes
  const route = useRoute();

  const email = route.params.email;
  const password = route.params.password;

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <SafeAreaView className="flex-1 items-center ml-3">
        <Title header={"Confirm Code"} />
        <View className="flex-1 mt-[220px]">
          <Text className="text-white font-[500]">{`Confirmation code sent to  ${email}`}</Text>

          <View className="mt-10 ">
            <Form />

            <View className="mt-10">
              <Text className="text-white text-center mb-[200]">Resend code in 56s</Text>

              <Button text={"Verify"} />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default ConfirmEmail;
