import { View } from "react-native";
import React, { useState } from "react";
import ContactList from "@/components/homepage/ContactList";
import useContactsWithPermission from "@/hooks/useContactsWithPermission";
import SearchContainer from "@/components/homepage/SearchContainer";

const Home = () => {
  const [search, setSearch] = useState("");
  useContactsWithPermission();
  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: "#F2F2F2" }}>
      <SearchContainer search={search} setSearch={setSearch} />
      <ContactList search={search} />
    </View>
  );
};

export default Home;
