import { View, FlatList } from "react-native";
import React from "react";
import { withObservables } from "@nozbe/watermelondb/react";
import ContactItem from "./ContactItem";
import { contactCollection } from "@/db";
import Contact from "@/model/Contacts";
import { Q } from "@nozbe/watermelondb";
type props = {
  contacts: Contact[];
};
const ContactList: React.FC<props> = ({ contacts }) => {
  return (
    <View>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ContactItem contact={item} />}
      />
    </View>
  );
};
const enhance = withObservables(["search"], ({ search }) => ({
  contacts: search
    ? contactCollection.query(
        Q.or(
          Q.where("name", Q.like(`%${search}%`)),
          Q.where("number", Q.like(`%${search}%`))
        )
      )
    : contactCollection.query(),
}));

export default enhance(ContactList);
