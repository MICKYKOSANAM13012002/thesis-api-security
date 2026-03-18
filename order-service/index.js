const express = require("express");
const app = express();

app.use(express.json());

// ✅ HEALTH ENDPOINT (VERY IMPORTANT)
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

const orders = [
  { orderId: 101, userId: 1, amount: 5000 },
  { orderId: 102, userId: 2, amount: 12000 }
];

// No ownership validation
app.get("/orders/:orderId", (req, res) => {
  const order = orders.find(o => o.orderId == req.params.orderId);
  res.json(order);
});

app.listen(3003, () => {
  console.log("Order service running on port 3003");
});
