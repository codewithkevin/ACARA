import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { interestFunction } from "./../../../Functions/Auth/Interest/InterestFunction";
import { useNavigation } from "@react-navigation/native";
import Button from "./../../Buttons/Button";
import { CheckError } from "./../../../Functions/Auth/Interest/CheckError";
import { useState } from "react";
import AuthPopup from "./../../ModalPopup/Auth/AuthPopup";

const InterestItems = () => {
  const {
    movie,
    financefun,
    finance,
    tripfun,
    trip,
    educationfun,
    education,
    exibihitionfun,
    exibihition,
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

  //Modal Popup
  const [modalVisible, setModalVisible] = useState(false);
  const [validationMessage, setValidationMessage] = useState("");

  const errorImage = "../../../assets/Error/Error.png";

  const { errorFunction, isLoading, error, setError } = CheckError();

  const navigation = useNavigation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await errorFunction(interest);

    if (error) {
      setModalVisible(true);
      setValidationMessage(error);
      setError("");
    }
    if (!error) {
      setModalVisible(false);
      setValidationMessage(error);
    }
  };
  console.log(interest);

  return (
    <View>
      <ScrollView vertical={false} className="p-5 mt-10 mb-[20px] h-full">
        <View className="h-[70px] w-full">
          <View className="flex-1 flex-row space-x-2 items-center p-0">
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                className="w-[30] h-[30]"
                source={require("../../../assets/Arrows/backarrow.png")}
              />
            </TouchableOpacity>
            <View className="p-0 mt-2">
              <Text className="text-[20px] font-bold">
                Select Your Interest
              </Text>
              <Text className="text-gray-500">Select at least 3 interest</Text>
            </View>
          </View>
        </View>

        <View className="h-full mb-[90]">
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
                  className={`text-[16px] ${
                    music ? "text-black" : "text-white"
                  }`}
                >
                  Music
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View className="flex-row justify-between mb-4">
            <TouchableOpacity
              onPress={financefun}
              className={`${
                finance ? "bg-white" : "bg-[#075ADE]"
              } p-5 h-[150px] rounded-3xl w-[180] border-solid`}
            >
              <View className="flex-1 justify-center items-center p-0">
                <Image
                  className="w-[80] h-[80]"
                  source={require("../../../assets/Auth/Interest/Finace.png")}
                />
                <Text
                  className={`text-[16px] ${
                    finance ? "text-black" : "text-white"
                  }`}
                >
                  Finace
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={moviefun}
              className={`${
                movie ? "bg-white" : "bg-[#075ADE]"
              } p-5 h-[150px] rounded-3xl w-[180] border-solid`}
            >
              <View className="flex-1 justify-center items-center p-0">
                <Image
                  className="w-[80] h-[80]"
                  source={require("../../../assets/Auth/Interest/Movie.png")}
                />
                <Text
                  className={`text-[16px] ${
                    movie ? "text-black" : "text-white"
                  }`}
                >
                  Movie
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View className="flex-row justify-between mb-4">
            <TouchableOpacity
              onPress={tripfun}
              className={`${
                trip ? "bg-white" : "bg-[#075ADE]"
              } p-5 h-[150px] rounded-3xl w-[180] border-solid`}
            >
              <View className="flex-1 justify-center items-center p-0">
                <Image
                  className="w-[80] h-[80]"
                  source={require("../../../assets/Auth/Interest/Trrip.png")}
                />
                <Text
                  className={`text-[16px] ${
                    trip ? "text-black" : "text-white"
                  }`}
                >
                  Trip
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={educationfun}
              className={`${
                education ? "bg-white" : "bg-[#075ADE]"
              } p-5 h-[150px] rounded-3xl w-[180] border-solid`}
            >
              <View className="flex-1 justify-center items-center p-0">
                <Image
                  className="w-[80] h-[80]"
                  source={require("../../../assets/Auth/Interest/Book.png")}
                />
                <Text
                  className={`text-[16px] ${
                    education ? "text-black" : "text-white"
                  }`}
                >
                  Education
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
                  className={`text-[16px] ${
                    sport ? "text-black" : "text-white"
                  }`}
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
                  className={`text-[16px] ${
                    food ? "text-black" : "text-white"
                  }`}
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
                  className={`text-[16px] ${
                    party ? "text-black" : "text-white"
                  }`}
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
                  className={`text-[16px] ${
                    tech ? "text-black" : "text-white"
                  }`}
                >
                  Technology
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View className="flex-row justify-between mb-4">
            <TouchableOpacity
              onPress={exibihitionfun}
              className={`${
                exibihition ? "bg-white" : "bg-[#075ADE]"
              } p-5 h-[150px] rounded-3xl w-[180] border-solid`}
            >
              <View className="flex-1 justify-center items-center p-0">
                <Image
                  className="w-[80] h-[80]"
                  source={require("../../../assets/Auth/Interest/Exhibition.png")}
                />
                <Text
                  className={`text-[16px] ${
                    exibihition ? "text-black" : "text-white"
                  }`}
                >
                  Exhibition
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <View className="mt-[-190] items-center text-center">
        <Button function={handleSubmit} text={"Next Page"} />
      </View>

      <AuthPopup
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        validationMessage={validationMessage}
        image={require(errorImage)}
      />
    </View>
  );
};

export default InterestItems;
