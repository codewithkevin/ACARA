import { View, Text, ImageBackground, StyleSheet } from "react-native";
import React from "react";
import Bottom from "./../../BottomSheet/Bottom";

const SecondScreen = () => {
  const info = {
    page: "LastScreen",
    header: "Second Screen",
    details:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis quidem eum sint ipsa blanditiis libero, rem dolore magni earum",
    image: {
      uri: "https://images.unsplash.com/photo-1614862762981-c577d220d0f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1430&q=80",
    },
  };

  return (
    <View className="flex-1">
      <ImageBackground
        className="bg-no-repeat bg-cover  h-[70vh]"
        source={info.image}
        resizeMode="cover"
        style={styles.image}
      >
        <Bottom next={info.page} title={info.header} details={info.details} />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
  },
});

export default SecondScreen;
