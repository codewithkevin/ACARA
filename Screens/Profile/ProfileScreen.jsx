import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  RefreshControl,
  StyleSheet,
} from "react-native";
import Title from "./../../Components/Profile/Title";
import UserProfile from "./../../Components/Profile/UserProfile";
import { useState, useCallback } from "react";
import UserInfo from "./../../Components/Profile/UserInfo";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const ProfileScreen = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
  }, []);

  return (
    <SafeAreaView className="ml-4 h-full">
      <Title />
      <ScrollView
        refreshControl={
          <RefreshControl
            tintColor="#00bfff"
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
        decelerationRate="fast"
      >
        <View className="p-5">
          <UserProfile />
          <UserInfo />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  },
});
