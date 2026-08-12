import axios from "axios";
import * as SQLite from "expo-sqlite";

let db: SQLite.SQLiteDatabase | null = null;

export async function initializeDatabase() {
  // Already initialized
  if (db) {
    return db;
  }

  // Open database
  db = await SQLite.openDatabaseAsync("loyalty.db");

  // Create table
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS products (
      id INTEGER PRIMARY KEY NOT NULL,
      title TEXT NOT NULL,
      price REAL NOT NULL,
      description TEXT NOT NULL,
      category TEXT NOT NULL,
      image TEXT
    );
  `);

  // Check whether products exist
  const result = await db.getFirstAsync<{ count: number }>(
    "SELECT COUNT(*) as count FROM products",
  );

  // Seed products only once
  if (result?.count === 0) {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");

      const products = response.data;

      for (const product of products) {
        await db.runAsync(
          `INSERT INTO products
           (id, title, price, description, category, image)
           VALUES (?, ?, ?, ?, ?, ?)`,
          product.id,
          product.title,
          product.price,
          product.description,
          product.category,
          product.image,
        );
      }

      console.log("Products inserted successfully");
    } catch (error) {
      console.log("Failed to store products:", error);
    }
  }

  return db;
}
