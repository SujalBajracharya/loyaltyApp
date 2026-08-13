import Bell from "@/assets/bell.svg";
import ActivityCard from "@/components/ActivityCard";
import AppText from "@/components/AppText";
import FloatingQRButton from "@/components/FloatingQRButton";
import PointsCard from "@/components/PointsCard";
import RewardCard from "@/components/RewardCard";
import SectionHeader from "@/components/SectionHeader";
import UpdateCard from "@/components/UpdateCard";
import { theme } from "@/constants/theme";
import { initializeDatabase } from "@/database/database";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

type JwtPayload = {
  sub: number;
  user: string;
  iat: number;
};

export default function HomeScreen() {
  const [products, setProducts] = useState<Product[]>([]);
  const [user, setUser] = useState("");
  const [page, setPage] = useState(0);

  const getProducts = async (page: number) => {
    try {
      const db = await initializeDatabase();

      const limit = 5;
      const offset = page * limit;
      const fetchedProducts = await db.getAllAsync<Product>(
        "SELECT * FROM products ORDER BY id ASC LIMIT ? OFFSET ?",
        [limit, offset],
      );
      setProducts((prev) => [...prev, ...fetchedProducts]);
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
    loadUser();
  }, []);

  useEffect(() => {
    getProducts(page);
  }, [page]);
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

              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ gap: 18 }}
                data={products}
                renderItem={({ item }) => (
                  <RewardCard
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    image={item.image}
                  />
                )}
                onEndReached={() => {
                  setPage((prev) => prev + 1);
                }}
                keyExtractor={(item) => item.id.toString()}
              />
            </View>

            {/* Our Menu */}
            {/* <View>
              <SectionHeader title="Our Menu" />
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ gap: 18 }}
                data={products}
                renderItem={({ item }) => (
                  <MenuCard
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    image={item.image}
                    rating={5}
                  />
                )}
                keyExtractor={(item) => item.id.toString()}
              >
                {products.map((product) => (
                  <MenuCard
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    image={product.image}
                    rating={5}
                  />
                ))}
              </FlatList>
            </View> */}

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
