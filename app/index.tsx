import { initializeDatabase } from "@/database/database";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Redirect } from "expo-router";
import { useEffect, useState } from "react";

export default function Index() {
  const [firstView, setFirstView] = useState<boolean | null>(null);
  const checkFirstView = async () => {
    try {
      const value = await AsyncStorage.getItem("firstView");

      if (value === null) {
        // First time opening the app
        await AsyncStorage.setItem("firstView", "true");
        setFirstView(true);
      } else {
        // App has been opened before
        setFirstView(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  //runs on first load
  useEffect(() => {
    checkFirstView();
    initializeDatabase();
  }, []);

  return firstView ? (
    <Redirect href="/onboarding" />
  ) : (
    <Redirect href="/signup" />
  );
}
