import { View, Text } from "react-native";
import { Avatar } from "react-native-paper";

const ImageUpload = () => {
  return (
    <View className="flex items-center mb-5 mt-3">
      <Avatar.Text size={120} color="white" label="E" />
    </View>
  );
};

export default ImageUpload;
