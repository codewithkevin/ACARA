import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Avatar } from "react-native-paper";
import { uploadImage } from "./../../../Functions/Auth/Profile/UploadImage";

const ImageUpload = (props) => {
  const email = props.email;

  const { image, pickImage, uploadingImage } = uploadImage();

  const handle = () => {
    uploadingImage(email);
  };

  console.log(`Upload Email: ${email}`);

  return (
    <View className="flex items-center mb-5 mt-3">
      <TouchableOpacity onPress={pickImage}>
        {!image ? (
          <Avatar.Text size={150} color="white" label="E" />
        ) : (
          <View className="static....">
            <Image
              source={{ uri: image.uri }}
              className="rounded-full"
              style={{ width: 150, height: 150 }}
            />
            <View className="absolute bottom-0 right-0">
              <TouchableOpacity
                className="mt-5 bg-slate-400 rounded-full"
                onPress={handle}
              >
                <Image
                  className="w-[30] h-[30]"
                  source={require("../../../assets/Arrows/correct.png")}
                />
              </TouchableOpacity>
            </View>
          </View>
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
