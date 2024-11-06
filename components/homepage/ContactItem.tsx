import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { Contact } from "@/tsModels/contacts";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
type props = {
  item: Contact;
};
const ContactItem: React.FC<props> = ({ item }) => {
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
            id: item.id,
            name: item.name,
            number: item.number,
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
        <Text style={{ ...styles.text, color: "#333333" }}>{item.name}</Text>
      </View>

      <Text style={{ ...styles.text, color: "#666666" }}>{item.number}</Text>
    </Pressable>
  );
};

export default ContactItem;
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
