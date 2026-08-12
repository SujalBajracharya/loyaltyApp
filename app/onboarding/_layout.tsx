import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function OnboardingLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack
        initialRouteName="howItWorks"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="data" />
        <Stack.Screen name="howItWorks" />
      </Stack>
    </GestureHandlerRootView>
  );
}
