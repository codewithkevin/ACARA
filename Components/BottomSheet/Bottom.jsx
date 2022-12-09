import React, { useCallback, useMemo, useRef, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { useNavigation } from "@react-navigation/native";
import { useThemeContext } from "./../../Hooks/useThemeContext";

const Bottom = (props) => {
  const navigation = useNavigation();

  const { theme } = useThemeContext();

  const [show, setShow] = useState(true);
  // ref
  const bottomSheetRef = useRef < BottomSheet > null;

  // variables
  const snapPoints = useMemo(() => ["40%", "45%"], []);

  return (
    <View className={`flex-1`}>
      <BottomSheet useRef={bottomSheetRef} index={1} snapPoints={snapPoints}>
        <View className="flex-1  items-center mt-3">
          <Text className="text-2xl text-[#009EFF] text-center max-w-[65%] mb-7">
            {props.title}
          </Text>
          <View>
            <Text className="text-black text-center w-70">{props.details}</Text>
          </View>
        </View>
        <View className="flex-1 items-center mt-3">
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("signup");
            }}
          >
            <Text className="font-bold text-[#009EFF]">Skip</Text>
          </TouchableOpacity>
          {props.next != "signup" ? (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(props.next);
              }}
              className="items-center font-bold mt-5 bg-[#009EFF] w-80 p-5 rounded-[25px]"
            >
              <Text className="text-white">next</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(props.next);
              }}
              className="items-center mt-5 bg-[#009EFF] w-80 p-5 rounded-[25px]"
            >
              <Text className="text-white font-bold text-md">
                Create Account
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </BottomSheet>
    </View>
  );
};

export default Bottom;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});
