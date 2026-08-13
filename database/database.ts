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

  // Check whether ratings exist
  const count = await db.getFirstAsync<{ count: number }>(
    `SELECT COUNT(*) as count FROM ratings`,
  );

  // Seed ratings only once
  if (count?.count === 0) {
    await db.execAsync(`
    CREATE TABLE IF NOT EXISTS ratings (
    id INTEGER PRIMARY KEY,
    product_id INTEGER NOT NULL,
    rate REAL NOT NULL,
    count INTEGER NOT NULL,

    FOREIGN KEY (product_id) REFERENCES products(id)
    );
  `);

    const statement = await db.prepareAsync(`
  INSERT INTO ratings (product_id, rate, count)
  VALUES ($id, $rate, $count)
`);

    try {
      await statement.executeAsync({
        $id: 1,
        $rate: 4.2,
        $count: 145,
      });

      await statement.executeAsync({
        $id: 2,
        $rate: 3.8,
        $count: 87,
      });

      await statement.executeAsync({
        $id: 3,
        $rate: 4.7,
        $count: 231,
      });

      await statement.executeAsync({
        $id: 4,
        $rate: 3.5,
        $count: 64,
      });

      await statement.executeAsync({
        $id: 5,
        $rate: 4.1,
        $count: 319,
      });

      await statement.executeAsync({
        $id: 6,
        $rate: 4.6,
        $count: 178,
      });

      await statement.executeAsync({
        $id: 7,
        $rate: 3.9,
        $count: 52,
      });

      await statement.executeAsync({
        $id: 8,
        $rate: 4.4,
        $count: 406,
      });

      await statement.executeAsync({
        $id: 9,
        $rate: 3.2,
        $count: 91,
      });

      await statement.executeAsync({
        $id: 10,
        $rate: 4.8,
        $count: 512,
      });

      await statement.executeAsync({
        $id: 11,
        $rate: 3.7,
        $count: 136,
      });

      await statement.executeAsync({
        $id: 12,
        $rate: 4.3,
        $count: 274,
      });

      await statement.executeAsync({
        $id: 13,
        $rate: 4.0,
        $count: 83,
      });

      await statement.executeAsync({
        $id: 14,
        $rate: 3.6,
        $count: 157,
      });

      await statement.executeAsync({
        $id: 15,
        $rate: 4.5,
        $count: 342,
      });

      await statement.executeAsync({
        $id: 16,
        $rate: 4.9,
        $count: 628,
      });

      await statement.executeAsync({
        $id: 17,
        $rate: 3.4,
        $count: 71,
      });

      await statement.executeAsync({
        $id: 18,
        $rate: 4.6,
        $count: 205,
      });

      await statement.executeAsync({
        $id: 19,
        $rate: 3.9,
        $count: 118,
      });

      await statement.executeAsync({
        $id: 20,
        $rate: 4.7,
        $count: 389,
      });

      console.log("Ratings table implemented");
    } catch (error) {
      console.log(error);
    } finally {
      await statement.finalizeAsync();
    }
  }

  return db;
}
