import { useState } from "react";
import { Alert } from "react-native";
import { app, storage, auth } from "../../../config.js";
import { getStorage, ref, uploadBytes, uploadString } from "firebase/storage";
import * as ImagePicker from "expo-image-picker";

export const uploadImage = () => {

  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      convertToPNG: true,
    });

    const source = { uri: result.uri };
    console.log(source);
    setImage(source);
  };

  const uploadingImage = async (email, username) => {
    setUploading(true);

    const imageRef = ref(storage, `profile/${email}/image`);


    let img = await fetch(image.uri);
    let blob = await img.blob();

    await uploadBytes(imageRef, blob)
      .then((snapshot) => {
        console.log("Uploaded a blob or file!");
      })
      .catch((e) => {
        alert(e);
      });

    setUploading(false);
    Alert.alert("Photo Uploaded Successfully");
    setImage(null);
  };

  return { image, pickImage, uploadingImage };

};
