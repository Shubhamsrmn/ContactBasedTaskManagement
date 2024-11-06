import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import PrimaryButton from "../utils/PrimaryButton";
import database, { contactCollection, taskCollection } from "@/db";

const TaskInputContainer = () => {
  const params = useLocalSearchParams();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [taskId, setTaskId] = useState(null);
  useEffect(() => {
    if (params.name && params.description && params.id) {
      setName(params.name);
      setDescription(params.description);
      setTaskId(params.id);
    }
  }, []);
  const createTaskHandler = async () => {
    try {
      if (taskId !== null) {
        await database.write(async () => {
          const currentTask = await taskCollection.find(taskId);
          await currentTask.update((updatedTask) => {
            updatedTask.name = name;
            updatedTask.description = description;
          });
        });
        router.replace("/");
        return;
      }
      const contact = await contactCollection.find(params.contactId);
      await database.write(async () => {
        const task = await taskCollection.create((newTask) => {
          newTask.name = name;
          newTask.description = description;
        });
        await task.update((updatedTask) => {
          updatedTask.contact.set(contact);
        });
      });
      router.replace("/");
    } catch (error) {
      console.log(error);
    }
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
