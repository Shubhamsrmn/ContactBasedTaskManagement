import { StyleSheet, View } from "react-native";
import React from "react";
import TaskList from "@/components/taskspage/TaskList";

const TasksPage = () => {
  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: "#F2F2F2" }}>
      <TaskList type="globalList" />
    </View>
  );
};

export default TasksPage;

const styles = StyleSheet.create({});
