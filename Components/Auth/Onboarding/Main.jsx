import { View, Text, ImageBackground, StyleSheet } from "react-native";
import React from "react";
import Bottom from "./../../BottomSheet/Bottom";

const Main = () => {
  const info = {
    page: "SecondScreen",
    header: "Exploring Upcoming and Nearby Events",
    details:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis quidem eum sint ipsa blanditiis libero, rem dolore magni earum",
    image: {
      uri: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
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
    justifyContent: "cover",
  },
});

export default Main;
