import { View, Text } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { useState } from "react";

const DropDown = (props) => {
  const [genderOpen, setGenderOpen] = useState(false);
  const [gender, setGender] = useState([
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Prefer Not to Say", value: "neutral" },
  ]);

  return (
    <View>
      <DropDownPicker
        className="bg-[#263159] border  text-white text-sm rounded-[50px] block w-full p-4 placeholder-white"
        open={genderOpen}
        value={props.genderValue}
        items={gender}
        setOpen={setGenderOpen}
        setValue={props.setGenderValue}
        setItems={setGender}
        placeholder="Gender"
        onChangeValue={(value) => props.setGenderValue(value)}
        zIndex={3000}
        zIndexInverse={1000}
      />
    </View>
  );
};

export default DropDown;
