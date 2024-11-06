import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import TaskList from "@/components/taskspage/TaskList";

const contactDetails = () => {
  const params = useLocalSearchParams();
  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: "#F2F2F2" }}>
      <View>
        <ContactItem title="Name" value={params.name} icon={"user"} />
        <ContactItem
          title="Mobile Number"
          value={params.number}
          icon={"phone"}
        />
      </View>

      <TaskList type="userList" contactId={params.id} />
    </View>
  );
};

export default contactDetails;

const styles = StyleSheet.create({});
type prop = {
  title: string;
  value: string;
  icon: any;
};
const ContactItem: React.FC<prop> = ({ title, value, icon }) => {
  return (
    <View style={{ marginBottom: 12 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 6,
          marginBottom: 8,
        }}
      >
        <FontAwesome name={icon} size={20} color="#FF9800" />

        <Text style={{ fontSize: 16, fontWeight: 500, color: "#666666" }}>
          {title}
        </Text>
      </View>
      <View
        style={{
          borderWidth: 1,
          borderColor: "#B4B4B8",
          padding: 12,
          marginBottom: 12,
          borderRadius: 12,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: 500, color: "#333333" }}>
          {value}
        </Text>
      </View>
    </View>
  );
};