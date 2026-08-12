import * as SQLite from "expo-sqlite";

export async function initializeDatabase() {
  const db = SQLite.openDatabaseAsync("loyalty.db");

  (await db).execAsync(`
        CREATE TABLE IF NOT EXISTS products (
            id INTEGER PRIMARY KEY NOT NULL,
            title TEXT NOT NULL,
            price REAL NOT NULL,
            description TEXT NOT NULL,
            category TEXT NOT NULL,
            image TEXT
        );
    `);
  return db;
}
