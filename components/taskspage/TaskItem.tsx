import { Text, View } from "react-native";
import React from "react";
import { Task } from "@/tsModels/tasks";
import { styles } from "../homepage/ContactItem";
type props = {
  item: Task;
};
const TaskItem: React.FC<props> = ({ item }) => {
  return (
    <View
      style={{
        ...styles.rowContainer,
        justifyContent: "space-between",
        borderWidth: 1,
        borderColor: "#B4B4B8",
        padding: 12,
        marginBottom: 12,
        borderRadius: 12,
      }}
    >
      <View
        style={{
          ...styles.rowContainer,
          gap: 6,
        }}
      >
        <Text style={{ ...styles.text, color: "#333333" }}>{item.name}</Text>
      </View>

      <Text style={{ ...styles.text, color: "#666666" }}>
        {item.description}
      </Text>
    </View>
  );
};

export default TaskItem;
