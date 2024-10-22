import React, { useEffect, useState } from "react";
import { Stack } from "expo-router";
import * as Font from "expo-font";
import { View, ActivityIndicator } from "react-native";
import { Provider } from "react-redux";
import store from "../redux/store";

export default function RootLayout() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        outfit: require("./../assets/fonts/Outfit-Regular.ttf"),
        "outfit-bold": require("./../assets/fonts/Outfit-Bold.ttf"),
        "outfit-medium": require("./../assets/fonts/Outfit-Medium.ttf"),
      });
      setFontsLoaded(true);
    }

    loadFonts();
  }, []);

  // Render a loading indicator while the fonts are being loaded
  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="index"
        />
      </Stack>
    </Provider>
  );
}
