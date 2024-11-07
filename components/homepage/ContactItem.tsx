import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
import Contact from "@/model/Contacts";
import { withObservables } from "@nozbe/watermelondb/react";
type props = {
  contact: Contact;
};
const ContactItem: React.FC<props> = ({ contact }) => {
  return (
    <Pressable
      style={{
        ...styles.rowContainer,
        justifyContent: "space-between",
        borderWidth: 1,
        borderColor: "#B4B4B8",
        padding: 12,
        marginBottom: 12,
        borderRadius: 12,
      }}
      onPress={() =>
        router.replace({
          pathname: "/contactDetails",
          params: {
            id: contact.id,
            name: contact.name,
            number: contact.number,
          },
        })
      }
    >
      <View
        style={{
          ...styles.rowContainer,
          gap: 6,
        }}
      >
        <AntDesign name="contacts" size={24} color="#FF9800" />
        <Text style={{ ...styles.text, color: "#333333" }}>{contact.name}</Text>
      </View>

      <Text style={{ ...styles.text, color: "#666666" }}>{contact.number}</Text>
    </Pressable>
  );
};
const enhance = withObservables(["contact"], ({ contact }) => ({
  contact,
}));

export default enhance(ContactItem);

export const styles = StyleSheet.create({
  mainItemContainer: {
    borderWidth: 1,
    borderColor: "#B4B4B8",
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: 500,
  },
});
