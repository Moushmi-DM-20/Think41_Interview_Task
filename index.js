const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const PORT = 3000;

// Connect to SQLite DB
const db = new sqlite3.Database('./products.db', (err) => {
  if (err) {
    console.error('❌ Failed to connect to DB:', err.message);
  } else {
    console.log('✅ Connected to SQLite DB');
  }
});

// Get all products
app.get('/api/products', (req, res) => {
  db.all('SELECT * FROM products', [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    res.json({ products: rows });
  });
});

// Get product by ID
app.get('/api/products/:id', (req, res) => {
  const { id } = req.params;
  db.get('SELECT * FROM products WHERE id = ?', [id], (err, row) => {
    if (err) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    if (!row) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(row);
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
