const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();
const router = express();
router.use(bodyParser.json());
router.use(cors());

// This is needed for POST method
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// MySQL connection
const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
});

connection.connect(error => {
  if (error) throw error;
  console.log('Successfully connected to the Marinekko database.');
});

router.get('/', (req, res) => {
  res.send('Welcome to the Marinekko Bag Database API!');
});

// ;-;
/* ------------------ Product web services ----------------------- */

// to receive all bags from Marinekko datatbase
router.get('/api/bag', (req, res) => {
  connection.query('SELECT * FROM Bag', (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});


// to receive specific bag from Marinekko datatbase
router.get('/api/bag/:id', (req, res) => {
  let bagId = req.params.id;

  if (!bagId) {
    return res.status(400).send({ error: true, message: 'Please provide product information' })
  }
  connection.query('SELECT * FROM Bag WHERE BagID = ?', [bagId], (error, results) => {
    if (error) throw error;
    res.json(results[0]);
    console.log(`Sending product result of bagId = ${bagId}`);
  })
});

// to query search bag in Marinekko datatbase
router.get('/search_api_query', (req, res) => {
  let query = 'SELECT * FROM Bag WHERE 1=1';
  const params = [];

  if (req.query.name) {
    query += ' AND BagName LIKE ?';
    params.push(`%${req.query.name}%`);
  }

  if (req.query.category) {
    query += ' AND BagCategory = ?';
    params.push(req.query.category);
  }

  if (req.query.color) {
    query += ' AND BagColor = ?';
    params.push(req.query.color);
  }

  if (req.query.priceRange) {
    const [minPrice, maxPrice] = req.query.priceRange.split('-').map(Number);
    query += ' AND BagPrice BETWEEN ? AND ?';
    params.push(minPrice, maxPrice);
  }

  connection.query(query, params, (error, results) => {
    if (error) return res.status(500).json({ error: error.message });
    res.json(results);
  });
});

router.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  connection.query(
    'SELECT * FROM AdminAccount WHERE AdminUsername = ? AND AdminPassword = ?',
    [username, password],
    (error, results) => {
      if (error) {
        return res.status(500).json({ error });
      }
      if (results.length > 0) {
        console.log(`Login attempt with username: ${username} and password: ${password}`);
        res.json({ message: 'Login successful', user: results[0] });
      } else {
        res.status(401).json({ message: 'Login failed' });
      }
    }
  );
});


// to receive all admin account from Marinekko datatbase
router.get('/api/adminaccount', (req, res) => {
  connection.query('SELECT * FROM AdminAccount', (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});

// POST request to add a new admin
router.post('/api/adminaccount', (req, res) => {
  const { username, firstName, lastName, email, password } = req.body;

  // Construct the SQL query to insert new admin data
  const insertQuery = `
    INSERT INTO AdminAccount (AdminUsername, AdminFirstName, AdminSurname, AdminEmail, AdminPassword) 
    VALUES (?, ?, ?, ?, ?)`;

  connection.query(insertQuery, [username, firstName, lastName, email, password], (error, results) => {
    if (error) {
      // Handle the error, for example send a 500 status code
      return res.status(500).json({ error: error.message });
    }

    // Send a successful response, for example:
    res.status(201).json({ message: 'New admin added successfully', adminId: results.insertId });
  });
});

// PUT request to edit an existing admin
router.put('/api/adminaccount/:adminId', (req, res) => {
  const { adminId } = req.params;
  const { username, firstName, lastName, email, password } = req.body;

  // Construct the SQL query to update admin data
  const updateQuery = `
    UPDATE AdminAccount 
    SET AdminUsername = ?, AdminFirstName = ?, AdminSurname = ?, AdminEmail = ?, AdminPassword = ?
    WHERE AdminID = ?`;

  connection.query(updateQuery, [username, firstName, lastName, email, password, adminId], (error, results) => {
    if (error) {
      // Handle the error, for example send a 500 status code
      return res.status(500).json({ error: error.message });
    }

    // Send a successful response, for example:
    res.status(200).json({ message: 'Admin updated successfully' });
  });
});

// to receive all login history account from Marinekko datatbase
router.get('/api/loginhistory', (req, res) => {
  connection.query('SELECT * FROM LoginHistory', (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});

// to receive all modifyadmins from Marinekko datatbase
router.get('/api/modifyadmin', (req, res) => {
  connection.query('SELECT * FROM ModifyAdmin', (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});

// to receive all modifybags from Marinekko datatbase
router.get('/api/modifybag', (req, res) => {
  connection.query('SELECT * FROM ModifyBag', (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});

// to receive all images from Marinekko datatbase
router.get('/api/image', (req, res) => {
  connection.query('SELECT * FROM Images', (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});

// to receive specific image of bag from Marinekko datatbase
router.get('/api/image/:id', (req, res) => {
  let bagId = req.params.id;

  if (!bagId) {
    return res.status(400).send({ error: true, message: 'Please provide product information' })
  }
  connection.query('SELECT * FROM Images WHERE BagID = ?', [bagId], (error, results) => {
    if (error) throw error;
    res.json(results);
    console.log(`Sending image result of bagId = ${bagId}`);
  })
});

const PORT = process.env.PORT;
router.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
