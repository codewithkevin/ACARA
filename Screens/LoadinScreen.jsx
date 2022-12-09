import { View, Text, Image } from "react-native";
import { useState } from "react";
import { useThemeContext } from "./../Hooks/useThemeContext";

const LoadingScreen = () => {
  const { theme } = useThemeContext();
  return (
    <View
      className="flex-1 items-center justify-center"
      style={{ backgroundColor: theme.colors.background }}
    >
      <Image
        className="w-[300] h-[300]"
        source={require("../assets/Loading/1.png")}
      />
    </View>
  );
};

export default LoadingScreen;
