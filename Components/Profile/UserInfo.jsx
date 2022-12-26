import { View, Text, FlatList, Button, TouchableOpacity } from "react-native";
import { GetUserDetails } from "./../../Functions/GetUserDetails";
import { Entypo } from "@expo/vector-icons";

const UserInfo = () => {
  const { email, interest, details, username, name } = GetUserDetails();

  return (
    <View className="h-full w-full">
      <View className="flex justify-center items-center mt-8">
        <Text className="text-white font-medium text-2xl">{username}</Text>
      </View>

      <View className="flex flex-row justify-center space-x-7 mt-5 p-3">
        <View className="items-center">
          <Text className="text-white text-xl font-bold">0</Text>
          <Text className="text-white text-md">Followers</Text>
        </View>
        <View className="border-r-2 border-[#333]" />

        <View className="items-center">
          <Text className="text-white text-xl font-bold">0</Text>
          <Text className="text-white text-md">Following</Text>
        </View>

        <View className="border-r-2 border-[#333]" />

        <View className="items-center">
          <Text className="text-white text-xl font-bold">0</Text>
          <Text className="text-white text-md">Events</Text>
        </View>
      </View>

      <View className="border-b-2 border-[#333] mr-4" />

      <View className="mt-10">
        <Text className="text-white font-semibold text-lg">About</Text>
        <Text className="text-white mt-3 text-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          est quae quas adipisci dolore quidem iste reiciendis minima
          consectetur, quos, sit itaque quisquam, esse aliquam nesciunt maiores
          totam ea sint!
        </Text>
      </View>

      <View className="mt-10">
        <View className="flex flex-row space-x-3">
          <View>
            <Text className="text-white font-semibold text-lg">Interest</Text>
          </View>
          <TouchableOpacity>
            <Entypo name="pencil" size={24} color="#6475ff" />
          </TouchableOpacity>
        </View>

        <View className="mt-3 ">
          <FlatList
            data={interest}
            numColumns={4}
            renderItem={({ item }) => (
              <View className="border-2  rounded-full border-[#6475ff] p-2 mx-2 my-2">
                <Text className="text-[#6475ff]">{item}</Text>
              </View>
            )}
            keyExtractor={(item) => item}
          />
        </View>
      </View>

      <View className="mt-6 mb-[70]">
        <Text className="text-white font-semibold text-lg">Events</Text>

        <View className="flex justify-center text-center items-center">
          <Text className="text-white mt-[130px] font-bold">No Post</Text>
        </View>
      </View>
    </View>
  );
};

export default UserInfo;
