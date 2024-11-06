import { View } from "react-native";
import React from "react";
import ContactList from "@/components/homepage/ContactList";
import useContactsWithPermission from "@/hooks/useContactsWithPermission";

const Home = () => {
  useContactsWithPermission();
  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: "#F2F2F2" }}>
      <ContactList />
    </View>
  );
};

export default Home;
