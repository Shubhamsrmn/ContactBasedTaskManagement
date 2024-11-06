import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { router, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { useColorScheme } from "@/hooks/useColorScheme";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <GestureHandlerRootView>
        <Stack
          screenOptions={{
            statusBarColor: "#3366FF",
            statusBarStyle: "light",
          }}
        >
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen
            name="contactDetails"
            options={{
              headerTitle: "Contact Details",
              headerTitleStyle: {
                color: "white",
              },
              headerStyle: { backgroundColor: "#3366FF" },
              headerLeft: () => (
                <Ionicons
                  name="arrow-back"
                  size={24}
                  color="white"
                  style={{
                    height: "100%",
                    width: 40,
                  }}
                  onPress={() => router.replace("/")}
                />
              ),
            }}
          />
          <Stack.Screen
            name="tasksInput"
            options={{
              headerTitle: "Create/Edit Task",
              headerTitleStyle: {
                color: "white",
              },
              headerStyle: { backgroundColor: "#3366FF" },
              headerLeft: () => (
                <Ionicons
                  name="arrow-back"
                  size={24}
                  color="white"
                  style={{
                    height: "100%",
                    width: 40,
                  }}
                  onPress={() => router.back()}
                />
              ),
            }}
          />
          <Stack.Screen name="+not-found" />
        </Stack>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}
