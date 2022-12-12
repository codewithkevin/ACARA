import React, { useState } from "react";
import { TextInput, View, StyleSheet } from "react-native";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";

const LocationScreen = () => {
  const [location, setLocation] = useState("");

  console.log(location);

  return (
    <View className="bg-white" style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter location"
        value={location}
        onChangeText={(text) => setLocation(text)}
      />
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {location && (
          <Marker
            coordinate={{
              latitude: 37.78825,
              longitude: -122.4324,
            }}
            title={location}
          />
        )}
      </MapView>
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
  input: {
    height: 40,
    width: "80%",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
  },
  map: {
    height: "80%",
    width: "100%",
  },
});

export default LocationScreen;
