import * as NavigationBar from "expo-navigation-bar";
import { Stack } from "expo-router";
import { useEffect } from "react";
import { Platform } from "react-native";

export default function RootLayout() {

    useEffect(() => {
        if (Platform.OS === "android") {
            NavigationBar.setVisibilityAsync("hidden"); // 🔥 Hide navigation buttons
            NavigationBar.setBehaviorAsync("inset-touch"); // Full immersive mode
        }
    }, []);

    return (
        <Stack
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="index" />
            <Stack.Screen name="modal" options={{ presentation: "modal" }} />
        </Stack>
    );
}
