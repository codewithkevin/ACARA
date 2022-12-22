import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import Title from "./../../Components/Event/Tittle";
import UploadEvents from "./../../Components/UploadEvents";

const EventsScreen = () => {
  return (
    <SafeAreaView className="flex-1 ml-5 mr-2">
      <UploadEvents />
      <View>
        <Title />
      </View>
    </SafeAreaView>
  );
};

export default EventsScreen;
