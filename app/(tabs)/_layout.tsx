import { FontAwesome5 } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      backBehavior="history"
      initialRouteName="deals"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#F5F5F5",
          paddingBottom: 4,
          paddingTop: 4,
        },
        tabBarInactiveTintColor: "#888888",
        tabBarActiveTintColor: "#FF6600",
        headerTitleAlign: "left",
        headerTitleStyle: {
          fontWeight: 600,
          textTransform: "capitalize",
          color: "white",
        },
        headerStyle: {
          backgroundColor: "#3366FF",
        },
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "Home",
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="TasksPage"
        options={{
          headerTitle: "Tasks",
          tabBarLabel: "Tasks",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="tasks" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
