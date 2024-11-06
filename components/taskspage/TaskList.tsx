import { View } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { router } from "expo-router";
import TaskItem from "./TaskItem";
import useListData from "@/hooks/useListData";
import PrimaryButton from "../utils/PrimaryButton";
type props = {
  type: "userList" | "globalList";
  contactId?: any;
};
const TaskList: React.FC<props> = ({ type, contactId }) => {
  const { listData, loading, error } = useListData("tasks");
  let filteredList = listData;
  if (type === "userList") {
    filteredList.map((listData) => listData.contact_id === contactId);
  }
  console.log(filteredList);

  return (
    <View>
      {type === "userList" && (
        <PrimaryButton
          btnTitle="Create Task"
          handleFun={() => router.push(`/tasksInput?contactId=${contactId}`)}
        />
      )}
      <FlatList
        data={filteredList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TaskItem item={item} />}
      />
    </View>
  );
};

export default TaskList;
