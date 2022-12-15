import { View, Text, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
const Title = () => {
  return (
    <View className="flex flex-row justify-between">
      <View className="flex flex-row">
        <Image
          className="w-[80] h-[80]"
          source={require("../../assets/Loading/Logo.png")}
        />
        <Text className="text-white text-2xl mt-3 font-bold">Profile</Text>
      </View>

      <View className="mr-4 mt-3">
        <View
          style={{
            backgroundColor: "#191e3e", // Set your desired color here
            padding: 10,
            borderRadius: 10,
            width: 50,
            marginLeft: 25,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <SimpleLineIcons name="settings" size={24} color="#6475ff" />
        </View>
      </View>
    </View>
  );
};

export default Title;
