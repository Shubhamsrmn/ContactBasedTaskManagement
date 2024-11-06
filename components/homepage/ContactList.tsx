import { View, FlatList } from "react-native";
import React from "react";

import ContactItem from "./ContactItem";
import useListData from "@/hooks/useListData";

const ContactList = () => {
  const { listData, loading, error } = useListData("contacts");
  return (
    <View>
      <FlatList
        data={listData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ContactItem item={item} />}
      />
    </View>
  );
};

export default ContactList;
