import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider style={{ flex: 1 }}>
        <Stack
        initialRouteName="index"
        >
          <Stack.Screen name="index" options={{headerShown: false}}/>
          <Stack.Screen name="nextPage" options={{headerTitle: "Signup"}}/>
        </Stack>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
