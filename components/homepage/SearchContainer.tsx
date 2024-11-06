import { View, Text, TextInput } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
type props = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};
const SearchContainer: React.FC<props> = ({ search, setSearch }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "flex-start",
        gap: 8,
        justifyContent: "center",
      }}
    >
      <AntDesign
        name="search1"
        size={32}
        color="black"
        style={{ marginTop: 2 }}
      />
      <TextInput
        selectionColor="black"
        style={{
          borderWidth: 1,
          borderColor: "#B4B4B8",
          paddingVertical: 4,
          paddingHorizontal: 12,
          borderRadius: 8,
          marginBottom: 16,
          flex: 1,
        }}
        placeholder="Search by contact or task"
        value={search}
        onChangeText={setSearch}
        autoCapitalize={"none"}
        spellCheck={false}
        autoCorrect={false}
      />
    </View>
  );
};

export default SearchContainer;
