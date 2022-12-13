import { useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Image,
  Alert,
  SafeAreaView,
  TouchableOpacity,
  Text,
} from "react-native";
import { UploadImage } from "./../../../Functions/Auth/Profile/UploadImage";
import { Avatar } from "react-native-paper";

const ImageUpload = () => {
  const { image, uploading, pickImage, uploadingImage } = UploadImage();

  return (
    <View className="flex items-center mb-5 mt-3">
      <TouchableOpacity onPress={pickImage}>
        {!image ? (
          <Avatar.Text size={150} color="white" label="E" />
        ) : (
          <Image
            source={{ uri: image.uri }}
            style={{ width: 150, height: 150 }}
            className="rounded-full border-white"
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  selectButton: {
    height: 50,
    width: 150,
    borderColor: "gray",
    borderRadius: 5,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  uploadButton: {
    height: 50,
    width: 150,
    borderColor: "gray",
    borderRadius: 5,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
  },

  imageContainer: {
    marginTop: 30,
    marginBottom: 50,
    alignItems: "center",
  },
});

export default ImageUpload;
