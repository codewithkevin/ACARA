import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useThemeContext } from "./../Hooks/useThemeContext";
import { useNavigation } from "@react-navigation/native";

const UploadEvents = () => {
  const { theme } = useThemeContext();

  const navigation = useNavigation();

  return (
    <View className="absolute right-6 bottom-10">
      <TouchableOpacity
        onPress={() => navigation.navigate("EventForm")}
        className={`items-center mt-5 bg-[#6475ff] p-5 rounded-full`}
      >
        <Text className="text-white font-bold text-md">
          <AntDesign name="plus" size={24} color="white" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default UploadEvents;
