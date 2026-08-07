import axios from "axios";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export default function ProductScreen() {
  const { id } = useLocalSearchParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`,
        );

        setProduct(response.data);
      } catch (error) {
        console.error("Failed to load item details", error);
      }
    };

    fetchProduct();
  }, [id]);

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
        <TouchableOpacity style={styles.cartButton}>
          <Text style={styles.cartText}>Add to Cart</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.buyText}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  header: {
    marginTop: 60,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: 320,
    padding: 20,
  },

  image: {
    width: "100%",
    height: "100%",
  },

  infoContainer: {
    paddingHorizontal: 20,
    paddingBottom: 120,
  },

  category: {
    fontSize: 13,
    color: "#6B7280",
    fontWeight: "600",
    letterSpacing: 1,
    marginBottom: 8,
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111827",
    lineHeight: 32,
  },

  price: {
    fontSize: 28,
    fontWeight: "700",
    color: "#2563EB",
    marginTop: 18,
  },

  divider: {
    height: 1,
    backgroundColor: "#E5E7EB",
    marginVertical: 24,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
    color: "#111827",
  },

  description: {
    fontSize: 15,
    color: "#4B5563",
    lineHeight: 24,
  },

  bottomBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
    gap: 12,
  },

  cartButton: {
    flex: 1,
    height: 52,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#111827",
    justifyContent: "center",
    alignItems: "center",
  },

  buyButton: {
    flex: 1,
    height: 52,
    borderRadius: 14,
    backgroundColor: "#111827",
    justifyContent: "center",
    alignItems: "center",
  },

  cartText: {
    color: "#111827",
    fontWeight: "600",
    fontSize: 16,
  },

  buyText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});
