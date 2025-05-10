const express = require('express');
const { Low, JSONFile } = require('lowdb');
const app = express();
const PORT = 3000;

const db = new Low(new JSONFile('db.json'));

db.read();
db.data ||= { books: [] };

app.use(express.json());

app.post('/books', async (req, res) => {
  const { title, author, year } = req.body;

  if (!title || !author || !year) {
    return res.status(400).json({ message: 'Title, author, and year are required.' });
  }

  const newBook = {
    id: db.data.books.length > 0 ? db.data.books[db.data.books.length - 1].id + 1 : 1,
    title,
    author,
    year,
  };

  db.data.books.push(newBook);
  await db.write();

  res.status(201).json(newBook);
});

app.get('/books', (req, res) => {
  res.json(db.data.books);
});

app.get('/books/:id', (req, res) => {
  const book = db.data.books.find((b) => b.id === parseInt(req.params.id));

  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }

  res.json(book);
});

app.put('/books/:id', async (req, res) => {
  const { title, author, year } = req.body;
  const book = db.data.books.find((b) => b.id === parseInt(req.params.id));

  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }

  if (title) book.title = title;
  if (author) book.author = author;
  if (year) book.year = year;

  await db.write();
  res.json(book);
});

app.delete('/books/:id', async (req, res) => {
  const index = db.data.books.findIndex((b) => b.id === parseInt(req.params.id));

  if (index === -1) {
    return res.status(404).json({ message: 'Book not found' });
  }

  db.data.books.splice(index, 1);
  await db.write();

  res.status(204).send(); // No Content
});

app.get('/books/search', (req, res) => {
  const { author, title } = req.query;
  let results = db.data.books;

  if (author) {
    results = results.filter((b) =>
      b.author.toLowerCase().includes(author.toLowerCase())
    );
  }

  if (title) {
    results = results.filter((b) =>
      b.title.toLowerCase().includes(title.toLowerCase())
    );
  }

  if (results.length === 0) {
    return res.status(404).json({ message: 'No books found' });
  }

  res.json(results);
});

app.use((req, res) => {
  res.status(404).json({ error: '404 Not Found' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
