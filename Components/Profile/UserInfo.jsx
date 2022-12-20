import { View, Text, FlatList, Button } from "react-native";
import { GetUserDetails } from "./../../Functions/GetUserDetails";

const UserInfo = () => {
  const { email, interest, details, username, name } = GetUserDetails();

  return (
    <View className="h-full">
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
        <Text className="text-white font-semibold text-lg">Interest</Text>

        <View className="mt-3">
          <FlatList
            data={interest}
            numColumns={4}
            renderItem={({ item }) => (
              <View className="border-2  rounded-full border-[#6475ff] p-4 mx-2 my-2">
                <Text className="text-[#6475ff]">{item}</Text>
              </View>
            )}
            keyExtractor={(item) => item}
          />
        </View>
      </View>
    </View>
  );
};

export default UserInfo;
