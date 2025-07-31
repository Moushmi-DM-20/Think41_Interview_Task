const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('products.db');

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    price REAL,
    description TEXT
  )`);

  db.run(`INSERT INTO products (name, price, description)
          VALUES
          ('Shampoo', 150.0, 'Hair care product'),
          ('Soap', 50.0, 'Bathing soap'),
          ('Toothpaste', 80.0, 'Dental care product')`);
});

db.close(() => {
  console.log('Database created and sample data inserted.');
});
