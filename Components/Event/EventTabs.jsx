import { View, Text, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";

const listTab = [
  {
    status: "Upcoming",
  },
  {
    status: "Past Events",
  },
  {
    status: "My Events",
  },
];

const EventTabs = () => {
  const [status, setStatus] = useState("Upcoming");

  const setStatusFliter = (status) => {
    setStatus(status);
  };

  useEffect(() => {
    setStatus("Upcoming");
  }, []);

  return (
    <View>
      <View className="flex flex-row justify-between mt-5">
        {listTab.map((e) => (
          <TouchableOpacity onPress={() => setStatusFliter(e.status)}>
            <View
              key={e.status}
              className={`border-2 p-4 rounded-full border-[#6475ff] ${
                status === e.status && "bg-[#6475ff]"
              }`}
            >
              <Text
                className={`text-[#6475ff] ${
                  status === e.status && "text-white"
                }`}
              >
                {e.status}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default EventTabs;
