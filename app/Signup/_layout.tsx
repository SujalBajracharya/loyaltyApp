import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function SignUpLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack initialRouteName="index">
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="nextPage" options={{ headerTitle: "Signup" }} />
        <Stack.Screen name="allSet" options={{ headerShown: false }} />
      </Stack>
    </GestureHandlerRootView>
  );
}
