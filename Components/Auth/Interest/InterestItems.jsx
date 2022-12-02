import { View, Text, TouchableOpacity, Image } from "react-native";
import { interestFunction } from "./../../../Functions/Auth/InterestFunction";

const InterestItems = () => {
  const { musicfun, artfun, interest, art, music } = interestFunction();

  console.log(interest);

  return (
    <View className="p-5 mt-10">
      <TouchableOpacity className="h-[70px] w-full">
        <View className="flex-1 flex-row space-x-2 items-center p-0">
          <Image
            className="w-[30] h-[30]"
            source={require("../../../assets/Arrows/backarrow.png")}
          />
          <Text className="text-[20px] font-bold">Select Your Interest</Text>
        </View>
      </TouchableOpacity>

      <View className="flex-1 flex-row justify-around">
        <TouchableOpacity
          onPress={artfun}
          className={`${
            art ? "bg-white" : "bg-[#075ADE]"
          } p-5 h-[150px] rounded-2xl w-[150] border-solid`}
        >
          <View className="flex-1 justify-center items-center p-0">
            <Image
              className="w-[80] h-[80]"
              source={require("../../../assets/Auth/Interest/lightart.png")}
            />
            <Text
              className={`text-[16px] ${art ? "text-black" : "text-white"}`}
            >
              Art
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={musicfun}
          className={`${
            music ? "bg-white" : "bg-[#075ADE]"
          } p-5 h-[150px] rounded-2xl w-[150] border-solid`}
        >
          <View className="flex-1 justify-center items-center p-0">
            <Image
              className="w-[80] h-[80]"
              source={require("../../../assets/Auth/Interest/Music.png")}
            />
            <Text
              className={`text-[16px] ${music ? "text-black" : "text-white"}`}
            >
              Music
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InterestItems;
