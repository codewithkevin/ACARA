import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { app, storage, auth } from "../../../config.js";
import { getStorage, ref, uploadBytes, uploadString } from "firebase/storage";

export const UploadImage = () => {
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

  const uploadingImage = async () => {
    setUploading(true);

    const imageRef = ref(storage, `imag`);

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

  return { image, uploading, pickImage, uploadingImage };
};
