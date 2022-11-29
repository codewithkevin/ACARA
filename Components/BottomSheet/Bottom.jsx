import React, { useCallback, useMemo, useRef, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { useNavigation } from "@react-navigation/native";

const Bottom = (props) => {
  const navigation = useNavigation();

  const [show, setShow] = useState(true);
  // ref
  const bottomSheetRef = useRef < BottomSheet > null;

  // variables
  const snapPoints = useMemo(() => ["40%", "45%"], []);

  return (
    <View className="flex-1">
      <View className="flex-1  rounded-t-3xl">
        <BottomSheet useRef={bottomSheetRef} index={1} snapPoints={snapPoints}>
          <View className="flex-1 items-center mt-3">
            <Text className="text-2xl text-[#009EFF] text-center max-w-[65%] mb-7">
              {props.title}
            </Text>
            <View>
              <Text className="text-black text-center w-70">
                {props.details}
              </Text>
            </View>
          </View>
          <View className="flex-1 items-center mt-3">
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Text className="font-bold text-[#009EFF]">Skip</Text>
            </TouchableOpacity>
            {props.next != null ? (
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
