const express = require("express");
const app = express();

app.use(express.json());

// ✅ HEALTH ENDPOINT (VERY IMPORTANT)
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

const users = [
  { id: 1, name: "Alice", email: "alice@test.com" },
  { id: 2, name: "Bob", email: "bob@test.com" }
];

// No authorization check (intentional BOLA)
app.get("/users/:id", (req, res) => {
  const user = users.find(u => u.id == req.params.id);
  res.json(user);
});

// Excessive data exposure
app.get("/users", (req, res) => {
  res.json(users);
});

app.listen(3002, () => {
  console.log("User service running on port 3002");
});
