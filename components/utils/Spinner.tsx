import { ActivityIndicator, Text, View } from "react-native";
import React from "react";
const Spinner = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F2F7FF",
      }}
    >
      <ActivityIndicator size="large" color="#023e8a" />
      <Text
        style={{
          textAlign: "center",
          marginTop: 8,
          fontSize: 16,
        }}
      >
        Please Wait ...
      </Text>
    </View>
  );
};

export default Spinner;
