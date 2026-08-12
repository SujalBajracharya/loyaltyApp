import AppText from "@/components/AppText";
import Button from "@/components/Button";
import { initializeDatabase } from "@/database/database";
import styles from "@/styles/productStyles";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, Image, ScrollView, Text, View } from "react-native";

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
    );
  }
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
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
      <View style={styles.bottomBar}>
        <Button title="Redeem" />
      </View>
    </View>
  );
}
