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
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState(user.email);

  useEffect(() => {
    const downloadImage = async () => {
      const imageRef = ref(storage, `profile/${email}/image`);
      //   let blob = await img.blob();
      const downloadURL = await getDownloadURL(imageRef);
      setImage(downloadURL);
      setIsLoading(false);
    };

    downloadImage();
  }, []);

  console.log(image);

  return (
    <View className="flex justify-center items-center">
      {isLoading ? (
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1661956602926-db6b25f75947?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
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
