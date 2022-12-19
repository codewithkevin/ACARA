import { View, Text, Image } from "react-native";
import { app, storage, auth } from "./../../config";
import {
  getStorage,
  ref,
  uploadBytes,
  uploadString,
  getDownloadURL,
} from "firebase/storage";
import { useState, useEffect } from "react";
import { GetUserDetails } from "./../../Functions/GetUserDetails";

const UserProfile = () => {
  const { getData, email, interest, details, username } = GetUserDetails();
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const downloadImage = async () => {
      const imageRef = ref(storage, `profile/${email}/image`);
      const downloadURL = await getDownloadURL(imageRef);
      setImage(downloadURL);
      setIsLoading(false);
    };

    downloadImage();
    getData();
  }, []);

  return (
    <View className="flex justify-center items-center">
      {isLoading ? (
        <Image
          source={{
            uri: `${image}`,
          }}
          className="w-[180px] h-[180px] rounded-full"
        />
      ) : (
        <Image
          source={{
            uri: `${image}`,
          }}
          className="w-[180px] h-[180px] rounded-full"
        />
      )}
    </View>
  );
};

export default UserProfile;
