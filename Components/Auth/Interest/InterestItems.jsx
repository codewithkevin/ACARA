import { View, Text, TouchableOpacity, Image } from "react-native";
import { interestFunction } from "./../../../Functions/Auth/Interest/InterestFunction";
import { useNavigation } from "@react-navigation/native";

const InterestItems = () => {
  const {
    foodfun,
    partyfun,
    techfun,
    musicfun,
    artfun,
    moviefun,
    sportfun,
    interest,
    art,
    music,
    food,
    sport,
    party,
    tech,
  } = interestFunction();

  const navigation = useNavigation();

  console.log(interest);

  return (
    <View className="p-5 mt-10">
      <View className="h-[70px] w-full">
        <View className="flex-1 flex-row space-x-2 items-center p-0">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              className="w-[30] h-[30]"
              source={require("../../../assets/Arrows/backarrow.png")}
            />
          </TouchableOpacity>
          <Text className="text-[20px] font-bold">Select Your Interest</Text>
        </View>
      </View>

      <View className="flex-row justify-between mb-4">
        <TouchableOpacity
          onPress={artfun}
          className={`${
            art ? "bg-white" : "bg-[#075ADE]"
          } p-5 h-[150px] rounded-3xl w-[180] border-solid`}
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
          } p-5 h-[150px] rounded-3xl w-[180] border-solid`}
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

      <View className="flex-row justify-between mb-4">
        <TouchableOpacity
          onPress={sportfun}
          className={`${
            sport ? "bg-white" : "bg-[#075ADE]"
          } p-5 h-[150px] rounded-3xl w-[180] border-solid`}
        >
          <View className="flex-1 justify-center items-center p-0">
            <Image
              className="w-[80] h-[80]"
              source={require("../../../assets/Auth/Interest/sport.png")}
            />
            <Text
              className={`text-[16px] ${sport ? "text-black" : "text-white"}`}
            >
              Sport
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={foodfun}
          className={`${
            food ? "bg-white" : "bg-[#075ADE]"
          } p-5 h-[150px] rounded-3xl w-[180] border-solid`}
        >
          <View className="flex-1 justify-center items-center p-0">
            <Image
              className="w-[80] h-[80]"
              source={require("../../../assets/Auth/Interest/food.png")}
            />
            <Text
              className={`text-[16px] ${food ? "text-black" : "text-white"}`}
            >
              Food
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View className="flex-row justify-between mb-4">
        <TouchableOpacity
          onPress={partyfun}
          className={`${
            party ? "bg-white" : "bg-[#075ADE]"
          } p-5 h-[150px] rounded-3xl w-[180] border-solid`}
        >
          <View className="flex-1 justify-center items-center p-0">
            <Image
              className="w-[80] h-[80]"
              source={require("../../../assets/Auth/Interest/party.png")}
            />
            <Text
              className={`text-[16px] ${party ? "text-black" : "text-white"}`}
            >
              Party
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={techfun}
          className={`${
            tech ? "bg-white" : "bg-[#075ADE]"
          } p-5 h-[150px] rounded-3xl w-[180] border-solid`}
        >
          <View className="flex-1 justify-center items-center p-0">
            <Image
              className="w-[80] h-[80]"
              source={require("../../../assets/Auth/Interest/tech.png")}
            />
            <Text
              className={`text-[16px] ${tech ? "text-black" : "text-white"}`}
            >
              Technology
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InterestItems;
