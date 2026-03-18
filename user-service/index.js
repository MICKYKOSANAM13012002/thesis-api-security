const express = require("express");
const app = express();

const users = [
  { id: 1, name: "Alice", email: "alice@test.com" },
  { id: 2, name: "Bob", email: "bob@test.com" }
];

app.get("/users/:id", (req, res) => {
  const user = users.find(u => u.id == req.params.id);
  res.json(user);
});

app.get("/users", (req, res) => res.json(users));
 
// ✅ Add health endpoint
app.get('/health', (req, res) => res.status(200).send('OK'));

app.listen(3002, () => {
  console.log("User service running on port 3002");
});
