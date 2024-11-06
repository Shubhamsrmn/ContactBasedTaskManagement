import { Text, Pressable } from "react-native";
import React from "react";
type props = {
  btnTitle: string;
  handleFun: () => void;
};
const PrimaryButton: React.FC<props> = ({ btnTitle, handleFun }) => {
  return (
    <Pressable
      style={{
        paddingVertical: 6,
        paddingHorizontal: 12,
        backgroundColor: "#FF9800",
        borderRadius: 8,
      }}
      onPress={handleFun}
    >
      <Text
        style={{
          fontSize: 18,
          fontWeight: 600,
          textAlign: "center",
          color: "#333333",
        }}
      >
        {btnTitle}
      </Text>
    </Pressable>
  );
};

export default PrimaryButton;
