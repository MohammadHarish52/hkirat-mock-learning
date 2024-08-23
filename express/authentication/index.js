import express from "express";
import jwt from "jsonwebtoken";
const jwtPassword = "123456";

const app = express();

app.use(express.json());

const ALL_USERS = [
  {
    username: "harish123@gmail.com",
    password: "12345",
    name: "Mohammad Harish",
  },
  {
    username: "tanzeel123@gmail.com",
    password: "12345665",
    name: "Tanzeel Ahmad",
  },
  {
    username: "ifa123@gmail.com",
    password: "12345123",
    name: "Ifa Zareen",
  },
];

function userExists(username, password) {
  // Use the find method to search for a matching user
  const user = ALL_USERS.find(
    (user) => user.username == username && user.password == password
  );

  // Return true if a user is found, otherwise return false
  return user;
}

app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "user doesn't exists",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", (req, res) => {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    const usersRemain = ALL_USERS.filter((user) => user.username != username);
    res.json({ usersRemain });
  } catch (error) {
    res.send(error);
  }
});

app.listen(3000, () => {
  console.log("server is listening on port 3000");
});
