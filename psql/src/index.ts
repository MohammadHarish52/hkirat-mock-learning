import { Client } from "pg";

// Async function to create the users table in the database

const client = new Client({
  connectionString:
    "postgresql://neondb_owner:YG7pwdJUuI1h@ep-nameless-glitter-a52yw7go.us-east-2.aws.neon.tech/neondb?sslmode=require",
});

async function createUserTable() {
  try {
    await client.connect();

    const result = await client.query(`CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      username VARCHAR(50) UNIQUE NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );`);

    console.log(result);
  } catch (error) {
    console.error("Error creating table:", error);
  } finally {
    await client.end();
  }
}

async function insertUserData() {
  const client = new Client({
    connectionString:
      "postgresql://neondb_owner:YG7pwdJUuI1h@ep-nameless-glitter-a52yw7go.us-east-2.aws.neon.tech/neondb?sslmode=require",
  });

  await client.connect();

  try {
    const insertQuery =
      "INSERT INTO users (username, email, password) VALUES($1, $2, $3)";
    const values = ["user8", "user7@gmail.com", "124225"];
    const result = await client.query(insertQuery, values);
    console.log(result);
  } catch (error) {
    console.error("Error inserting data:", error);
  } finally {
    await client.end();
  }
}

// Async function to fetch user data from the database given an email
async function getUser(email: string) {
  const client = new Client({
    connectionString:
      "postgresql://neondb_owner:YG7pwdJUuI1h@ep-nameless-glitter-a52yw7go.us-east-2.aws.neon.tech/neondb?sslmode=require",
  });

  try {
    await client.connect(); // Ensure client connection is established
    const query = "SELECT * FROM users WHERE email = $1";
    const values = [email];
    const result = await client.query(query, values);

    if (result.rows.length > 0) {
      console.log("User found:", result.rows[0]); // Output user data
      return result.rows[0]; // Return the user data
    } else {
      console.log("No user found with the given email.");
      return null; // Return null if no user was found
    }
  } catch (err) {
    console.error("Error during fetching user:", err);
    throw err; // Rethrow or handle error appropriately
  } finally {
    await client.end(); // Close the client connection
  }
}

// Example usage
// createUserTable();
// insertUserData();
getUser("user1@gmail.com").catch(console.error);
