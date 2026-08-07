import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function ProductLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider style={{ flex: 1 }}>
        <Stack>
          <Stack.Screen name="[id]" options={{ headerTitle: "" }} />
        </Stack>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
