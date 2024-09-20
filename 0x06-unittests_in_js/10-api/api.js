const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id', (req, res) => {
  const cartId = req.params.id;
  if (/^\d+$/.test(cartId)) {
    res.send(`Payment methods for cart ${cartId}`);
  } else {
    res.status(404).send('Invalid cart ID. Must be a positive integer.');
  }
});

app.get('/available_payments', (req, res) => {
  res.json({ payment_methods: { credit_cards: true, paypal: false } });
});

app.post('/login', (req, res) => {
  const username = req.body.userName;
  res.send(`Welcome ${username}`);
});

const PORT = 7865;
app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});
