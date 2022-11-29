import { View, Text, Image } from "react-native";

const LoadingScreen = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Image
        className="w-[200] h-[200]"
        source={require("../assets/Loading/1.png")}
      />
      <Text className="text-2xl font-bold mb-2">ACARA</Text>
    </View>
  );
};

export default LoadingScreen;
