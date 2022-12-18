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
import { useAuthContext } from "./../../Hooks/Auth/useAuthContext";

const UserProfile = () => {
  const { user } = useAuthContext();
  const [image, setImage] = useState(null);
  const [email, setEmail] = useState(user.email);

  useEffect(() => {
    const downloadImage = async () => {
      const imageRef = ref(storage, `profile/${email}/image`);
      //   let blob = await img.blob();
      const downloadURL = await getDownloadURL(imageRef);
      setImage(downloadURL);
    };

    downloadImage();
  }, []);

  console.log(image);

  return (
    <View className="flex justify-center items-center">
      <Image
        source={{
          uri: `${image}`,
        }}
        className="w-[180px] h-[180px] rounded-full"
      />
    </View>
  );
};

export default UserProfile;
