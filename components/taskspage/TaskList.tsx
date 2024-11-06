import { Text, View } from "react-native";
import React, { useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import { router } from "expo-router";
import TaskItem from "./TaskItem";
import useListData from "@/hooks/useListData";
import PrimaryButton from "../utils/PrimaryButton";
import SearchContainer from "../homepage/SearchContainer";
import Spinner from "../utils/Spinner";
type props = {
  type: "userList" | "globalList";
  contactId?: any;
};
const TaskList: React.FC<props> = ({ type, contactId }) => {
  const [search, setSearch] = useState("");
  const { listData, loading } = useListData("tasks");
  const { listData: contactData } = useListData("contacts");
  const filteredContacts = contactData.filter(
    (contact) =>
      contact.name.toLowerCase().includes(search.toLowerCase()) ||
      contact.number.includes(search.toLowerCase())
  );
  const contactIds = new Set(filteredContacts.map((contact) => contact.id));
  let filteredList = listData;
  if (type === "userList") {
    filteredList = filteredList.filter(
      (listData) => listData.contact_id === contactId
    );
  }
  if (type === "globalList") {
    filteredList = filteredList.filter((task) =>
      contactIds.has(task.contact_id)
    );
  }
  if (loading) return <Spinner />;

  return (
    <View>
      {type === "userList" && (
        <PrimaryButton
          btnTitle="Create Task"
          handleFun={() => {
            router.push(`/tasksInput?contactId=${contactId}`);
          }}
        />
      )}
      {type === "userList" && (
        <Text
          style={{
            textAlign: "center",
            fontSize: 24,
            fontWeight: 600,
            marginVertical: 16,
          }}
        >
          User Task List
        </Text>
      )}
      {type === "globalList" && (
        <SearchContainer search={search} setSearch={setSearch} />
      )}

      {filteredList.length === 0 && (
        <Text style={{ textAlign: "center" }}>No Tasks available now.</Text>
      )}

      <FlatList
        data={filteredList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TaskItem type={type} item={item} />}
      />
    </View>
  );
};

export default TaskList;
