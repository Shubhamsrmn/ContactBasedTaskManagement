import { View } from "react-native";
import React, { useState } from "react";
import TaskList from "@/components/taskspage/TaskList";
import SearchContainer from "@/components/homepage/SearchContainer";

const TasksPage = () => {
  const [search, setSearch] = useState("");
  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: "#F2F2F2" }}>
      <SearchContainer search={search} setSearch={setSearch} />

      <TaskList search={search} />
    </View>
  );
};

export default TasksPage;
