import AppText from "@/components/AppText";
import Button from "@/components/Button";
import { initializeDatabase } from "@/database/database";
import styles from "@/styles/productStyles";
import { router, Stack, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  // rating: {
  //   rate: number;
  //   count: number;
  // };
};

export default function ProductScreen() {
  const [loading, setLoading] = useState(true);
  const { id } = useLocalSearchParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const db = await initializeDatabase();
        const fetchedProduct = await db.getFirstAsync<Product>(
          `SELECT * FROM products where id= ${id}`,
        );
        setProduct(fetchedProduct);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ActivityIndicator size="large" color="#2563EB" />
          <AppText> Please wait.... </AppText>
          <AppText> Things are getting ready </AppText>
        </View>
      </SafeAreaView>
    );
  }

  const deleteItem = async (id: number | undefined) => {
    try {
      const db = await initializeDatabase();
      if (id === undefined) {
        console.log("id is undefined");
        return;
      }
      await db.runAsync(`DELETE FROM products WHERE id = ?`, id);
      router.replace("/home");
      Alert.alert("Success", "Product deleted successfully!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: product?.title ?? "Product",
        }}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        {/* Product Image */}
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: product?.image }}
            style={styles.image}
            resizeMode="contain"
          />
        </View>

        {/* Product Info */}
        <View style={styles.infoContainer}>
          <Text style={styles.category}>{product?.category.toUpperCase()}</Text>

          <Text style={styles.title}>{product?.title}</Text>

          <Text style={styles.price}>${product?.price}</Text>

          <View style={styles.divider} />

          <Text style={styles.sectionTitle}>Description</Text>

          <Text style={styles.description}>{product?.description}</Text>
        </View>
      </ScrollView>

      {/* Bottom Buttons */}
      <View style={[styles.bottomBar, { flex: 1, flexDirection: "column" }]}>
        <Button title="Redeem" />
        <TouchableOpacity
          style={{
            borderRadius: 15,
            paddingVertical: 16,
            paddingHorizontal: 8,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            width: "100%",
            backgroundColor: "red",
          }}
          onPress={() => deleteItem(product?.id)}
        >
          <AppText
            size="m"
            variant="medium"
            style={{ textAlign: "center", color: "white" }}
          >
            Delete Item
          </AppText>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
