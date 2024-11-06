import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import PrimaryButton from "../utils/PrimaryButton";
import { router, useLocalSearchParams } from "expo-router";
import database, { taskCollection } from "@/db";

const TaskInputContainer = () => {
  const params = useLocalSearchParams();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const createTaskHandler = async () => {
    try {
      await database.write(async () => {
        await taskCollection.create((task) => {
          task.name = name;
          task.description = description;
          task.contact_id = params.contactId;
        });
      });
      router.back();
    } catch (error) {}
  };
  return (
    <View>
      <Text
        style={{
          fontWeight: 500,
          marginBottom: 6,
        }}
      >
        Tasks Title
      </Text>

      <TextInput
        selectionColor="black"
        style={{
          borderWidth: 1,
          borderColor: "#B4B4B8",
          paddingVertical: 4,
          paddingHorizontal: 12,
          borderRadius: 8,
        }}
        placeholder="Enter Task Title"
        value={name}
        onChangeText={setName}
        autoCapitalize={"none"}
        spellCheck={false}
        autoCorrect={false}
        autoFocus={true}
      />
      <Text
        style={{
          fontWeight: 500,
          marginBottom: 6,
          marginTop: 20,
        }}
      >
        Tasks Description
      </Text>

      <TextInput
        selectionColor="black"
        style={{
          borderWidth: 1,
          borderColor: "#B4B4B8",
          paddingVertical: 4,
          paddingHorizontal: 12,
          borderRadius: 8,
          marginBottom: 18,
        }}
        placeholder="Enter Task Description"
        value={description}
        onChangeText={setDescription}
        autoCapitalize={"none"}
        spellCheck={false}
        autoCorrect={false}
      />
      <PrimaryButton btnTitle="Submit" handleFun={createTaskHandler} />
    </View>
  );
};

export default TaskInputContainer;

const styles = StyleSheet.create({});
