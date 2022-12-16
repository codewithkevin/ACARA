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
import { SendCode } from "./../../Functions/Auth/ConfirmEmail/SendCode";
import { useEffect, useState } from "react";
import { ConfirmCode } from "./../../Functions/Auth/ConfirmEmail/ConfirmCode";
import AuthPopup from "./../../Components/ModalPopup/Auth/AuthPopup";
import { useNavigation } from "@react-navigation/native";

const ConfirmEmail = () => {
  const navigation = useNavigation();
  const { sendMail } = SendCode();
  const { confirmCode, error, isLoading } = ConfirmCode();

  //States
  const [confirm, setConfirm] = useState();

  const errorImage = "../../assets/Error/Error.png";
  const successImage = "../../assets/Success/success.png";

  //ROutes
  const route = useRoute();

  const email = route.params.email;
  const password = route.params.password;

  //Modal Popup
  const [modalVisible, setModalVisible] = useState(false);
  const [validationMessage, setValidationMessage] = useState("");

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const handleConfirm = () => {
    confirmCode(confirm);

    isLoading
      ? null
      : error
      ? (setModalVisible(true),
        setValidationMessage("Incorrect Confirmation Code"))
      : navigation.navigate("interest", { email: email, password: password });
  };

  useEffect(() => {
    sendMail(email);
  }, []);

  console.log(confirm);

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <SafeAreaView className="flex-1 items-center ml-3">
        <Title header={"Confirm Code"} />
        <View className="flex-1 mt-[110px]">
          <Text className="text-white font-[500]">{`Confirmation code sent to  ${email}`}</Text>

          <View className="mt-10 ">
            <Form setConfirm={setConfirm} confirm={confirm} />

            <View className="mt-10">
              <Text className="text-white text-center mb-[200]">
                Resend code in 56s
              </Text>

              <Button function={handleConfirm} text={"Verify"} />
            </View>
          </View>
        </View>

        <AuthPopup
          setModalVisible={setModalVisible}
          modalVisible={modalVisible}
          validationMessage={validationMessage}
          image={require(errorImage)}
        />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default ConfirmEmail;
