const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

const SECRET = "hardcoded_secret"; // intentionally weak

app.post("/login", (req, res) => {
  const { username } = req.body;
  const token = jwt.sign({ user: username, role: "user" }, SECRET, { expiresIn: "2h" });
  res.json({ token });
});

// ✅ Add health endpoint
app.get('/health', (req, res) => res.status(200).send('OK'));

app.listen(3001, () => {
  console.log("Auth service running on port 3001");
});
