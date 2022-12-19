import { View, Text } from "react-native";
import { GetUserDetails } from "./../../Functions/GetUserDetails";

const UserInfo = () => {
  const { email, interest, details, username, name } = GetUserDetails();

  return (
    <View>
      <View className="flex justify-center items-center mt-8">
        <Text className="text-white font-medium text-2xl">{name}</Text>

        <View className="flex flex-row justify-between border-b-2 border-[#333] mt-5 p-3">
          <View className="border-r-2 p-2 border-[#333] flex items-center text-center mr-5">
            <Text className="text-white text-xl">0</Text>
            <Text className="text-white text-md">Followers</Text>
          </View>

          <View className="border-r-2 p-2 border-[#333] flex items-center text-center mr-5">
            <Text className="text-white text-xl">0</Text>
            <Text className="text-white text-md">Following</Text>
          </View>

          <View className="border-r-2 p-2 border-[#333] flex items-center text-center mr-5">
            <Text className="text-white text-xl">0</Text>
            <Text className="text-white text-md">Events</Text>
          </View>
        </View>
      </View>

      <View className="mt-10">
        <Text className="text-white font-semibold text-lg">About</Text>
        <Text className="text-white mt-3 text-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          est quae quas adipisci dolore quidem iste reiciendis minima
          consectetur, quos, sit itaque quisquam, esse aliquam nesciunt maiores
          totam ea sint!
        </Text>
      </View>
    </View>
  );
};

export default UserInfo;
