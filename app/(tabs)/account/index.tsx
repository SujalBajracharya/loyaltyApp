import Button from "@/components/Button";
import styles from "@/styles/accountStyles";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type User = {
  address: {
    geolocation: {
      lat: BigInteger;
      long: BigInteger;
    };
    city: string;
    street: string;
    number: number;
    zipcode: string;
  };
  id: number;
  email: string;
  username: string;
  password: string;
  name: {
    firstname: string;
    lastname: string;
  };
  phone: string;
  __v: number;
};

export default function AccountScreen() {
  const [user, setUser] = useState<User | null>(null);
  const getUser = async () => {
    try {
      const username = await AsyncStorage.getItem("username");
      const response = await axios.get("https://fakestoreapi.com/users");

      const user = response.data.find(
        (user: User) => user?.username === username,
      );

      if (user) {
        setUser(user);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const Logout = async () => {
    try {
      await AsyncStorage.clear();

      router.replace("/signup");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.header}>My Account</Text>

        <View style={styles.buttonContainer}>
          <Text style={styles.name}>
            {user?.name.firstname} {user?.name.lastname}
          </Text>
          <Text style={styles.username}>@{user?.username}</Text>
        </View>
        {/* Personal Information */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Personal Information</Text>

          <View style={styles.row}>
            <Ionicons name="mail-outline" size={22} color="#2563EB" />
            <View style={styles.textContainer}>
              <Text style={styles.label}>Email</Text>
              <Text style={styles.value}>{user?.email}</Text>
            </View>
          </View>

          <View style={styles.row}>
            <Ionicons name="call-outline" size={22} color="#2563EB" />
            <View style={styles.textContainer}>
              <Text style={styles.label}>Phone</Text>
              <Text style={styles.value}>{user?.phone}</Text>
            </View>
          </View>

          <View style={styles.row}>
            <Ionicons name="person-outline" size={22} color="#2563EB" />
            <View style={styles.textContainer}>
              <Text style={styles.label}>Username</Text>
              <Text style={styles.value}>{user?.username}</Text>
            </View>
          </View>
        </View>

        {/* Address */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Address</Text>

          <View style={styles.row}>
            <Ionicons name="location-outline" size={22} color="#2563EB" />
            <View style={styles.textContainer}>
              <Text style={styles.label}>Street</Text>
              <Text style={styles.value}>
                {user?.address.number}, {user?.address.street}
              </Text>
            </View>
          </View>

          <View style={styles.row}>
            <Ionicons name="business-outline" size={22} color="#2563EB" />
            <View style={styles.textContainer}>
              <Text style={styles.label}>City</Text>
              <Text style={styles.value}>{user?.address.city}</Text>
            </View>
          </View>

          <View style={styles.row}>
            <Ionicons name="mail-open-outline" size={22} color="#2563EB" />
            <View style={styles.textContainer}>
              <Text style={styles.label}>Zip Code</Text>
              <Text style={styles.value}>{user?.address.zipcode}</Text>
            </View>
          </View>
        </View>

        {/* Location */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Geo Location</Text>

          <Text style={styles.value}>
            Latitude: {user?.address.geolocation.lat}
          </Text>

          <Text style={styles.value}>
            Longitude: {user?.address.geolocation.long}
          </Text>
        </View>

        {/* SignOut Button */}
        <View style={styles.buttonContainer}>
          <Button title="sign out" onPress={() => Logout()} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
