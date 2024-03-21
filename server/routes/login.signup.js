const express = require("express");
const router = express.Router();
const pool = require("../db");

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const userResult = await pool.query(
    "SELECT * FROM user_data WHERE email=$1",
    [email]
  );
  // console.log(userResult);
  if (userResult.rows.length == 0) {
    return res
      .status(400)
      .json({ error: "User with this email does not exist please signup" });
  }
  const user = userResult.rows[0];
  if (user.password !== password) {
    return res.status(400).json({ error: "password is not valid" });
  }
  res.json({ message: "user login succesfull" });
});

router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  const userResult = await pool.query(
    "SELECT * FROM user_data WHERE email=$1",
    [email]
  );
  if (userResult.rows.length > 0) {
    return res
      .status(400)
      .json({ error: "User with this email already exists" });
  }
  const insertUserQuery =
    "INSERT INTO user_data (username, email, password) VALUES ($1, $2, $3)";
  const newUser = await pool.query(insertUserQuery, [
    username,
    email,
    password,
  ]);
  res.status(201).json({ message: "signup successful", user: newUser.rows[0] });
});

module.exports = router;
