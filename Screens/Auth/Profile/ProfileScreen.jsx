import { View, Text, SafeAreaView } from "react-native";
import Title from "./../../../Components/Title/Title";
import ImageUpload from "./../../../Components/Auth/Profile/ImageUpload";
import Form from "./../../../Components/Auth/Profile/Form";

const ProfileScreen = () => {
  return (
    <View className="p-5 mt-5 mb-[20px] h-full w-full">
      <Title header={"Complete Your Profile"} />
      <Form />
    </View>
  );
};

export default ProfileScreen;
