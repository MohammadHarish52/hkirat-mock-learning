"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
// Async function to create the users table in the database
const client = new pg_1.Client({
    connectionString: "postgresql://neondb_owner:YG7pwdJUuI1h@ep-nameless-glitter-a52yw7go.us-east-2.aws.neon.tech/neondb?sslmode=require",
});
function createUserTable() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            const result = yield client.query(`CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      username VARCHAR(50) UNIQUE NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );`);
            console.log(result);
        }
        catch (error) {
            console.error("Error creating table:", error);
        }
        finally {
            yield client.end();
        }
    });
}
function insertUserData() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new pg_1.Client({
            connectionString: "postgresql://neondb_owner:YG7pwdJUuI1h@ep-nameless-glitter-a52yw7go.us-east-2.aws.neon.tech/neondb?sslmode=require",
        });
        yield client.connect();
        try {
            const insertQuery = "INSERT INTO users (username, email, password) VALUES($1, $2, $3)";
            const values = ["user8", "user7@gmail.com", "124225"];
            const result = yield client.query(insertQuery, values);
            console.log(result);
        }
        catch (error) {
            console.error("Error inserting data:", error);
        }
        finally {
            yield client.end();
        }
    });
}
// Async function to fetch user data from the database given an email
function getUser(email) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new pg_1.Client({
            connectionString: "postgresql://neondb_owner:YG7pwdJUuI1h@ep-nameless-glitter-a52yw7go.us-east-2.aws.neon.tech/neondb?sslmode=require",
        });
        try {
            yield client.connect(); // Ensure client connection is established
            const query = "SELECT * FROM users WHERE email = $1";
            const values = [email];
            const result = yield client.query(query, values);
            if (result.rows.length > 0) {
                console.log("User found:", result.rows[0]); // Output user data
                return result.rows[0]; // Return the user data
            }
            else {
                console.log("No user found with the given email.");
                return null; // Return null if no user was found
            }
        }
        catch (err) {
            console.error("Error during fetching user:", err);
            throw err; // Rethrow or handle error appropriately
        }
        finally {
            yield client.end(); // Close the client connection
        }
    });
}
// Example usage
// createUserTable();
// insertUserData();
getUser("user1@gmail.com").catch(console.error);
