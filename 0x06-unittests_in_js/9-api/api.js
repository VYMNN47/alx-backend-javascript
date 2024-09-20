const express = require('express');

app = express();

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

app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});
