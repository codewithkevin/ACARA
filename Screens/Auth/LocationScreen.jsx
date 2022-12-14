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
import * as ImagePicker from "expo-image-picker";
import { app, storage, auth } from "../../config.js";
import { getStorage, ref, uploadBytes, uploadString } from "firebase/storage";
import { uploadImage } from "./../../Functions/Auth/Profile/UploadImage";

const LocationScreen = () => {
  const { image, pickImage, uploadingImage } = uploadImage();

  return (
    <SafeAreaView className="bg-white" style={styles.container}>
      <TouchableOpacity style={styles.selectButton} onPress={pickImage}>
        <Text style={styles.buttonText}>Pick an Image</Text>
      </TouchableOpacity>

      <View style={styles.imageContainer}>
        {image && (
          <Image
            source={{ uri: image.uri }}
            style={{ width: 300, height: 300 }}
          />
        )}

        <TouchableOpacity style={styles.uploadButton} onPress={uploadingImage}>
          <Text style={styles.buttonText}>Upload Image</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
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

export default LocationScreen;
