import { Text, View } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import TaskItem from "./TaskItem";
import Task from "@/model/Tasks";
import { withObservables } from "@nozbe/watermelondb/react";
import { taskCollection } from "@/db";
import { Q } from "@nozbe/watermelondb";
type props = {
  tasks: Task[];
};
const TaskList: React.FC<props> = ({ tasks }) => {
  return (
    <View>
      {tasks.length === 0 && (
        <Text style={{ textAlign: "center" }}>No Tasks available now.</Text>
      )}

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TaskItem task={item} />}
      />
    </View>
  );
};
const enhance = withObservables(["contactId"], ({ contactId }) => ({
  tasks: contactId
    ? taskCollection.query(Q.where("contact_id", contactId))
    : taskCollection.query(),
}));
export default enhance(TaskList);
