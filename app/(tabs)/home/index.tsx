import Bell from "@/assets/bell.svg";
import ActivityCard from "@/components/ActivityCard";
import AppText from "@/components/AppText";
import FloatingQRButton from "@/components/FloatingQRButton";
import MenuCard from "@/components/MenuCard";
import PointsCard from "@/components/PointsCard";
import RewardCard from "@/components/RewardCard";
import SectionHeader from "@/components/SectionHeader";
import UpdateCard from "@/components/UpdateCard";
import { theme } from "@/constants/theme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

type JwtPayload = {
  sub: number;
  user: string;
  iat: number;
};

export default function HomeScreen() {
  const [products, setProducts] = useState<Product[]>([]);
  const [user, setUser] = useState("");

  const getProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      const fetchedUser = await AsyncStorage.getItem("username");

      if (fetchedUser !== null) {
        setUser(fetchedUser);
      }
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const loadUser = async () => {
    try {
      const token = await AsyncStorage.getItem("JWT token");

      if (token) {
        const decoded = jwtDecode<JwtPayload>(token);
        setUser(decoded.user);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
    loadUser();
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* header */}
        <View style={styles.header}>
          <View>
            <AppText variant="medium" size="m" color="background" weight="500">
              Hi, {user ? user : "User"}
            </AppText>
          </View>
          {/* icon */}
          <Bell width="24" height="24" />
        </View>

        {/* Rest of the Section inside margin */}
        <View style={{ marginHorizontal: 20 }}>
          <PointsCard />

          {/* main */}
          <View style={{ gap: 24, marginTop: 18 }}>
            {/* Claim your Rewards */}
            <View>
              <SectionHeader title="Claim your rewards" />
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ gap: 18 }}
              >
                {products.map((product) => (
                  <RewardCard
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    image={product.image}
                  />
                ))}
              </ScrollView>
            </View>

            {/* Our Menu */}
            <View>
              <SectionHeader title="Our Menu" />
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ gap: 18 }}
              >
                {products.map((product) => (
                  <MenuCard
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    image={product.image}
                    rating={product.rating.rate}
                  />
                ))}
              </ScrollView>
            </View>

            {/* News & Updates */}
            <View>
              <SectionHeader title="News & Updates" />
              <View style={{ gap: 11 }}>
                {products.slice(0, 3).map((product) => (
                  <UpdateCard
                    image={product.image}
                    key={product.id}
                    id={product.id}
                  />
                ))}
              </View>
            </View>

            {/* Recent Activity */}
            <View>
              <SectionHeader title="Recent Activity" />
              <View style={{ gap: 11 }}>
                <ActivityCard
                  title="Purchase at Himalayan Java Cafe"
                  date="21 Dec, 2025"
                  points={55}
                />
                <ActivityCard
                  title="Redeemed Free Coffee"
                  date="21 Dec , 2025"
                  points={-200}
                />
                <ActivityCard
                  title="Purchase at Himalayan Java Cafe"
                  date="21 Dec, 2025"
                  points={50}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <FloatingQRButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },

  content: {
    paddingBottom: 20,
  },
  header: {
    backgroundColor: theme.colors.primary,
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 120,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
