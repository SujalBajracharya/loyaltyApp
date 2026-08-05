import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function ForgotPasswordLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider style={{ flex: 1 }}>
        <Stack
          initialRouteName="index"
        >
          <Stack.Screen name="index" options={{headerTitle: ""}}/>
        </Stack>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
