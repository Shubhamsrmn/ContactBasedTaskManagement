import { View, FlatList } from "react-native";
import React, { useState } from "react";
import ContactItem from "./ContactItem";
import useListData from "@/hooks/useListData";
import Spinner from "../utils/Spinner";
import SearchContainer from "./SearchContainer";

const ContactList = () => {
  const [search, setSearch] = useState("");
  const { listData: contactData, loading } = useListData("contacts");
  const { listData: taskData } = useListData("tasks");
  if (loading) return <Spinner />;
  const filteredContacts = contactData.filter(
    (contact) =>
      contact.name.toLowerCase().includes(search.toLowerCase()) ||
      contact.number.includes(search.toLowerCase())
  );
  const filteredTasks = taskData.filter(
    (task) =>
      task.name.toLowerCase().includes(search.toLowerCase()) ||
      task.description.toLowerCase().includes(search.toLowerCase())
  );
  const taskContactIds = new Set(filteredTasks.map((task) => task.contact_id));
  const filteredContactData = contactData.filter((contact) =>
    taskContactIds.has(contact.id)
  );
  const combinedData = [
    ...filteredContacts.filter((contact) => !taskContactIds.has(contact.id)),
    ...filteredContactData,
  ];
  const uniqueContacts = Array.from(
    new Map(combinedData.map((contact) => [contact.id, contact])).values()
  );

  return (
    <View>
      <SearchContainer search={search} setSearch={setSearch} />
      <FlatList
        data={uniqueContacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ContactItem item={item} />}
      />
    </View>
  );
};

export default ContactList;
