import Account from "@/assets/account.svg";
import Home from "@/assets/home.svg";
import Plus from "@/assets/plus.svg";
import { Tabs } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function HomeLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider style={{ flex: 1 }}>
        <Tabs
          screenOptions={{
            headerShown: false,

            tabBarStyle: {
              height: 97,
              paddingBottom: 25,
              paddingTop: 15,
              backgroundColor: "#fff",
              borderTopWidth: 0,
            },
            tabBarActiveTintColor: "#0E9384",
            tabBarInactiveTintColor: "#606060",

            tabBarLabelStyle: {
              fontSize: 14,
              fontWeight: "600",
            },
          }}
        >
          <Tabs.Screen
            name="home"
            options={{
              title: "Home",
              href: "/home",
              tabBarIcon: ({ color, size }) => (
                <Home height={size} width={size} color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="addProduct"
            options={{
              title: "Add Product",
              href: "/addProduct",
              tabBarIcon: ({ color, size }) => (
                <Plus height={size} width={size} color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="account"
            options={{
              title: "Account",
              href: "/account",
              tabBarIcon: ({ color, size }) => (
                <Account height={size} width={size} color={color} />
              ),
            }}
          />
        </Tabs>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
