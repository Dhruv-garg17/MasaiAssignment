// server.js

const express = require('express');
const { Low, JSONFile } = require('lowdb');
const app = express();
const PORT = 3000;

const db = new Low(new JSONFile('db.json'));

db.read();
db.data ||= { dishes: [] };

app.use(express.json());

app.post('/dishes', async (req, res) => {
  const { name, price, category } = req.body;
  if (!name || !price || !category) {
    return res.status(400).json({ message: 'Please provide name, price, and category.' });
  }

  const newDish = {
    id: db.data.dishes.length + 1,
    name,
    price,
    category
  };

  db.data.dishes.push(newDish);
  await db.write();
  res.status(201).json(newDish);
});

app.get('/dishes', (req, res) => {
  res.json(db.data.dishes);
});

app.get('/dishes/:id', (req, res) => {
  const dish = db.data.dishes.find(d => d.id === parseInt(req.params.id));
  if (!dish) {
    return res.status(404).json({ message: 'Dish not found' });
  }
  res.json(dish);
});

app.put('/dishes/:id', async (req, res) => {
  const dish = db.data.dishes.find(d => d.id === parseInt(req.params.id));
  if (!dish) {
    return res.status(404).json({ message: 'Dish not found' });
  }

  const { name, price, category } = req.body;
  dish.name = name || dish.name;
  dish.price = price || dish.price;
  dish.category = category || dish.category;

  await db.write();
  res.json(dish);
});

app.delete('/dishes/:id', async (req, res) => {
  const dishIndex = db.data.dishes.findIndex(d => d.id === parseInt(req.params.id));
  if (dishIndex === -1) {
    return res.status(404).json({ message: 'Dish not found' });
  }

  db.data.dishes.splice(dishIndex, 1);
  await db.write();
  res.status(204).send();
});

app.get('/dishes/get', (req, res) => {
  const { name } = req.query;
  const filteredDishes = db.data.dishes.filter(dish =>
    dish.name.toLowerCase().includes(name.toLowerCase())
  );

  if (filteredDishes.length === 0) {
    return res.status(404).json({ message: 'No dishes found' });
  }

  res.json(filteredDishes);
});

app.use((req, res) => {
  res.status(404).json({ error: '404 Not Found' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
