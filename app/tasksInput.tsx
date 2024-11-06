import { StyleSheet, View } from "react-native";
import React from "react";
import TaskInputContainer from "@/components/taskspage/TaskInputContainer";

const tasksInput = () => {
  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: "#F2F2F2" }}>
      <TaskInputContainer />
    </View>
  );
};

export default tasksInput;

const styles = StyleSheet.create({});
