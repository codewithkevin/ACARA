import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";

const listTab = [
  {
    status: "All",
  },
  {
    status: "Purple",
  },
  {
    status: "Green",
  },
];

const data = [
  { name: "Ronaldo", status: "Green" },
  { name: "Messi", status: "Purple" },
  { name: "Kaka", status: "Green" },
  { name: "Benzema", status: "Green" },
  { name: "Ronaldo", status: "Purple" },
];

const CalenderScreen = () => {
  const [status, setStatus] = useState("All");
  const [dataList, setDataList] = useState(data);
  const setStatusFliter = (status) => {
    if (status !== "All") {
      setDataList([...data.filter((e) => e.status === status)]);
    } else {
      setDataList(data)
    }
    setStatus(status);
  };

  return (
    <SafeAreaView className="bg-white flex-1" styles={styles.container}>
      <View style={styles.listTab}>
        {listTab.map((e) => (
          <TouchableOpacity
            onPress={() => setStatusFliter(e.status)}
            style={[styles.btnTab, status === e.status && styles.btnTabActive]}
          >
            <Text
              className="text-black"
              style={[status === e.status && styles.textTabActive]}
            >
              {e.status}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={dataList}
        keyExtractor={(e, i) => i.toString()}
        renderItem={({ item, index }) => (
          <View key={index} style={styles.itemContainer}>
            <View style={styles.itemLogo}>
              <Image
                className="w-[50] h-[50]"
                source={require("../../assets/Loading/Logo.png")}
              />
            </View>

            <View style={styles.itemBody}>
              <Text style={styles.itemName}>{item.name}</Text>
            </View>

            <View
              style={[
                styles.itemStatus,
                {
                  backgroundColor:
                    item.status === "Purple" ? "#e58483" : "green",
                },
              ]}
            >
              <Text style={styles.itemName}>{item.status}</Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default CalenderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  listTab: {
    flexDirection: "row",
    alignSelf: "center",
    marginBottom: 20,
    // marginBottom: 20,
  },
  btnTab: {
    width: Dimensions.get("window").width / 3.5,
    flexDirection: "row",
    borderWidth: 0.5,
    borderColor: "#EBEBEB",
    padding: 10,
    justifyContent: "center",
  },
  btnTabActive: {
    backgroundColor: "blue",
  },
  textTabActive: {
    color: "white",
  },
  itemContainer: {
    flexDirection: "row",
    paddingVertical: 15,
  },
  itemLogo: {
    padding: 10,
  },
  itemImage: {
    width: 10,
    height: 50,
  },
  itemBody: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  itemName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  itemStatus: {
    backgroundColor: "green",
    paddingHorizontal: 6,
    justifyContent: "center",
    right: 12,
  },
});
