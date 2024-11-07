import { Alert, Pressable, Text, View } from "react-native";
import React from "react";
import { styles } from "../homepage/ContactItem";
import { AntDesign, Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import database, { taskCollection } from "@/db";
import Task from "@/model/Tasks";
import { withObservables } from "@nozbe/watermelondb/react";
type props = {
  task: Task;
};
const TaskItem: React.FC<props> = ({ task }) => {
  const deleteTaskHandler = () => {
    Alert.alert(
      "Confirmation",
      "Do you wish to go ahead and delete the task? Please confirm",
      [
        {
          text: "Cancel",
          onPress: () => {},
          style: "cancel",
        },
        {
          text: "Confirm",
          onPress: async () => await onConfirmFun(),
          style: "destructive",
        },
      ]
    );
  };

  const onConfirmFun = async () => {
    try {
      await database.write(async () => {
        const currentTask = await taskCollection.find(task.id);
        await currentTask.destroyPermanently();
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View
      style={{
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
        <Text style={{ ...styles.text, color: "#333333" }}>{task.name}</Text>
      </View>

      <Text
        style={{ ...styles.text, color: "#666666", marginBottom: 12 }}
        numberOfLines={2}
      >
        {task.description}
      </Text>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          marginBottom: 8,
        }}
      >
        <Pressable
          onPress={() =>
            router.push(
              `/tasksInput?id=${task.id}&name=${task.name}&description=${task.description}`
            )
          }
        >
          <Feather name="edit" size={24} color="black" />
        </Pressable>
        <Pressable onPress={deleteTaskHandler}>
          <AntDesign name="delete" size={24} color="black" />
        </Pressable>
      </View>
    </View>
  );
};
const enhance = withObservables(["task"], ({ task }) => ({
  task,
}));

export default enhance(TaskItem);
