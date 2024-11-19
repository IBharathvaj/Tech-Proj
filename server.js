const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const port = 5005;

// Middleware
app.use(express.json());

// Connect to SQLite database
const db = new sqlite3.Database('./database.db', (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to the SQLite database.');
  }
});

const cors = require('cors');
app.use(cors());


// Create a table if it doesn't exist
db.run(
  `CREATE TABLE IF NOT EXISTS users (
     id INTEGER PRIMARY KEY AUTOINCREMENT,
     username TEXT NOT NULL,
     email TEXT NOT NULL,
     password TEXT NOT NULL
   )`,
  (err) => {
    if (err) {
      console.error('Error creating table:', err.message);
    }
  }
);

// Example route to add a user
app.post('/api/register', (req, res) => {
  const { username, email, password } = req.body;
  db.run(
    `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`,
    [username, email, password],
    function (err) {
      if (err) {
        console.error(err.message);
        res.status(500).send('Error adding user.');
      } else {
        res.status(200).send({ id: this.lastID, message: 'User added successfully!' });
      }
    }
  );
});

// Example route to fetch all users
app.get('/api/users', (req, res) => {
  db.all(`SELECT * FROM users`, [], (err, rows) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(200).send(rows);
    }
  });
});

app.get('/', (req, res) => {
  res.send('Welcome to the Study Website Backend!');
});


// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
