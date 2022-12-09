import { View, Text, Image } from "react-native";

const LoadingScreen = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Image
        className="w-[300] h-[300]"
        source={require("../assets/Loading/1.png")}
      />
    </View>
  );
};

export default LoadingScreen;
