import bcrypt from "bcrypt";
import { db } from "../index";
import { users } from "./schema";

async function seed() {
  console.log("Seeding database...");

  try {
    await db.insert(users).values([
      {
        name: "Budi Santoso",
        email: "budi@kopinusantara.id",
        password: await bcrypt.hash("password_awal", 10),
        role: "owner",
      },
      {
        name: "Reza",
        email: "reza@kopinusantara.id",
        password: await bcrypt.hash("password_awal", 10),
        role: "staff",
      },
    ]);

    console.log("✅ Seed completed successfully!");
  } catch (error) {
    console.error("❌ Seed failed:", error);
    process.exit(1);
  }
}

seed();
