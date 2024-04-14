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

// to receive all admin account from Marinekko datatbase
router.get('/api/adminaccount', (req, res) => {
  connection.query('SELECT * FROM AdminAccount', (error, results) => {
    if (error) throw error;
    res.json(results);
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
