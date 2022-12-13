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

const LocationScreen = () => {
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
