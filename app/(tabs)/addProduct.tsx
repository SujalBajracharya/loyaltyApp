import Button from "@/components/Button";
import { initializeDatabase } from "@/database/database";
import React, { useState } from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Toast from "react-native-toast-message";
import z from "zod";

export default function AddProducts() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [rate, setRate] = useState("");
  const [count, setCount] = useState("");

  const productSchema = z.object({
    title: z.string().trim().min(1, "Title is required"),

    price: z.coerce.number().positive("Price must be greater than 0"),

    description: z.string().trim().min(1, "Description is required"),

    category: z.string().trim().min(1, "Category is required"),

    image: z.string().trim().min(1, "Image URL is required"),

    rate: z.coerce
      .number()
      .min(0, "Rating cannot be below 0")
      .max(5, "Rating cannot be above 5"),

    count: z.coerce
      .number()
      .int("Count must be a whole number")
      .nonnegative("Count cannot be negative"),
  });

  const handleAddProduct = async () => {
    const result = productSchema.safeParse({
      title,
      price,
      description,
      category,
      image,
      rate,
      count,
    });

    if (!result.success) {
      Alert.alert("Error", result.error.issues[0].message);

      Toast.show({
        type: "error",
        text1: result.error.issues[0].message,
      });

      return;
    }

    // Everything is valid here
    const data = result.data;

    try {
      const db = await initializeDatabase();

      const result = await db.runAsync(
        `INSERT INTO products
        (title, price, description, category, image)
        VALUES (?, ?, ?, ?, ?)`,
        data.title,
        data.price,
        data.description,
        data.category,
        data.image,
      );

      const productId = result.lastInsertRowId;

      await db.runAsync(
        `INSERT INTO ratings
        (product_id, rate, count)
        VALUES (?, ?, ?)`,
        productId,
        data.rate, // Convert String to Number
        data.count, // Convert String to Number
      );

      Alert.alert("Success", "Product added successfully!");
      Toast.show({
        type: "success",
        text1: `Product ${title} added successfully`,
      });

      // Clear form
      setTitle("");
      setPrice("");
      setDescription("");
      setCategory("");
      setImage("");
      setRate("");
      setCount("");
    } catch (error) {
      console.log("Failed to add product:", error);
      Alert.alert("Error", "Failed to add product.");
      Toast.show({
        type: "error",
        text1: "Failed to add Product",
      });
    }
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Text style={styles.title}>Add Product</Text>

        <Text style={styles.subtitle}>
          Enter the details below to add a new product.
        </Text>
      </View>

      {/* Title */}
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Product Title</Text>

        <TextInput
          placeholder="Enter product title"
          placeholderTextColor="#999"
          value={title}
          onChangeText={setTitle}
          style={styles.input}
        />
      </View>

      {/* Price */}
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Price</Text>

        <TextInput
          placeholder="Enter price"
          placeholderTextColor="#999"
          keyboardType="decimal-pad"
          value={price}
          onChangeText={setPrice}
          style={styles.input}
        />
      </View>

      {/* Description */}
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Description</Text>

        <TextInput
          placeholder="Enter product description"
          placeholderTextColor="#999"
          multiline
          numberOfLines={5}
          textAlignVertical="top"
          value={description}
          onChangeText={setDescription}
          style={[styles.input, styles.descriptionInput]}
        />
      </View>

      {/* Category */}
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Category</Text>

        <TextInput
          placeholder="Enter product category"
          placeholderTextColor="#999"
          value={category}
          onChangeText={setCategory}
          style={styles.input}
        />
      </View>

      {/* Image URL */}
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Image URL</Text>

        <TextInput
          placeholder="https://example.com/image.jpg"
          placeholderTextColor="#999"
          autoCapitalize="none"
          keyboardType="url"
          value={image}
          onChangeText={setImage}
          style={styles.input}
        />
      </View>

      {/* Rate URL */}
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Rate</Text>

        <TextInput
          placeholder="Enter the rating of your product"
          placeholderTextColor="#999"
          autoCapitalize="none"
          keyboardType="decimal-pad"
          value={rate}
          onChangeText={setRate}
          style={styles.input}
        />
      </View>

      {/* Count URL */}
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Count</Text>

        <TextInput
          placeholder="Enter the counts"
          placeholderTextColor="#999"
          autoCapitalize="none"
          keyboardType="number-pad"
          value={count}
          onChangeText={setCount}
          style={styles.input}
        />
      </View>

      {/* Add Product */}
      <Button
        title="Add Product"
        variant="primary"
        onPress={() => handleAddProduct()}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
  },

  content: {
    padding: 20,
    paddingBottom: 40,
  },

  header: {
    marginBottom: 28,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#222",
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 14,
    color: "#777",
    lineHeight: 21,
  },

  fieldContainer: {
    marginBottom: 18,
  },

  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
  },

  input: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 13,
    fontSize: 15,
    color: "#222",
  },

  descriptionInput: {
    height: 120,
    paddingTop: 13,
  },
});
