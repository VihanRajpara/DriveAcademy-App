import { useFonts } from "expo-font";
import * as Font from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {
  Font.loadAsync({
    "outfit": require("./../assets/fonts/Outfit-Regular.ttf"),
    "outfit-bold": require("./../assets/fonts/Outfit-Bold.ttf"),
    "outfit-medium": require("./../assets/fonts/Outfit-Medium.ttf"),
  });
  return (
    <Stack>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="index"
      />
    </Stack>
  );
}
