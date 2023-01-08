import { View, Text, TouchableOpacity, TextInput } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";

const DatePicker = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState();
  const [dateValue, setDateValue] = useState("");
  const [show, setShow] = useState(false);
  const [isClicked, setIsClicked] = useState();

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
    let date = new Date(currentDate);
    let options = { month: "long", day: "numeric", year: "numeric" };
    let dateString = new Intl.DateTimeFormat("en-US", options).format(date);
    setDateValue(dateString);
    setIsClicked(true);
  };

  const showMode = (currentMode) => {
    if (Platform.OS === "android") {
      setShow(false);
    }
    setMode(currentMode);
  };

  const showDate = () => {
    setShow(!show);
  };

  const showDatepicker = () => {
    showMode("date");
    setShow(!show);
  };

  return (
    <View className="w-[100%] h-[60px] px-2">
      <View className="flex-row items-center w-[100%]">
        <View className="w-full">
          <TextInput
            placeholder={isClicked ? dateValue : "Date of Event"}
            className="bg-[#1c2039] border  text-white text-sm rounded-[50px] block w-full p-4 placeholder-white"
            placeholderTextColor={isClicked ? "white" : "white"}
            containerStyle={{ marginTop: 10, backgroundColor: "white" }}
            //   value={email}
            //   onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View className="mb-6">
          <TouchableOpacity onPress={showDate} activeOpacity={1.8}>
            <FontAwesome
              name="calendar"
              size={24}
              color="#636568"
              style={{ width: 30, height: 30, position: "absolute", right: 5 }}
            />
          </TouchableOpacity>
        </View>
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          onChange={onChange}
          themeVariant="dark"
          positiveButtonLabel="Done"
        />
      )}
    </View>
  );
};

export default DatePicker;
