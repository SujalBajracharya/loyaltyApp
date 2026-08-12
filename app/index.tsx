import { initializeDatabase } from "@/database/database";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Redirect } from "expo-router";
import { useEffect, useState } from "react";

export default function Index() {
  const [firstView, setFirstView] = useState<boolean | null>(null);
  const [isSignedIn, setIsSignedIn] = useState<boolean | null>(null);
  const checkFirstView = async () => {
    try {
      const value = await AsyncStorage.getItem("firstView");
      const token = await AsyncStorage.getItem("JWT token");

      if (value === null) {
        // First time opening the app
        await AsyncStorage.setItem("firstView", "true");
        setFirstView(true);
      } else {
        // App has been opened before
        setFirstView(false);
      }

      if (token === null) {
        setIsSignedIn(false);
      } else {
        setIsSignedIn(true);
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

  if (firstView === null || isSignedIn === null) {
    return null;
  }

  return firstView ? (
    <Redirect href="/onboarding" />
  ) : isSignedIn ? (
    <Redirect href="/home" />
  ) : (
    <Redirect href="/signup" />
  );
}
