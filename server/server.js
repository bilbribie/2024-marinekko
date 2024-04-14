const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

//require('dotenv').config();
const app = express();
app.use(bodyParser.json());

// MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'marinekko', 
    password: 'test',
    database: 'sec3_gr4_database' 
});

connection.connect(error => {
  if (error) throw error;
  console.log('Successfully connected to the database.');
});

// ;-;
app.get('/', (req, res) => {
  res.send('Welcome to the Marinekko Bag Database API!');
});

  app.get('/api/bag', (req, res) => {
    connection.query('SELECT * FROM Bag', (error, results) => {
      if (error) throw error;
      res.json(results);
    });
  });
  
  app.get('/api/adminaccount', (req, res) => {
    connection.query('SELECT * FROM AdminAccount', (error, results) => {
      if (error) throw error;
      res.json(results);
    });
  });

  app.get('/api/loginhistory', (req, res) => {
    connection.query('SELECT * FROM LoginHistory', (error, results) => {
      if (error) throw error;
      res.json(results);
    });
  });

  app.get('/api/modifyadmin', (req, res) => {
    connection.query('SELECT * FROM ModifyAdmin', (error, results) => {
      if (error) throw error;
      res.json(results);
    });
  });

  app.get('/api/modifybag', (req, res) => {
    connection.query('SELECT * FROM ModifyBag', (error, results) => {
      if (error) throw error;
      res.json(results);
    });
  });

  app.get('/api/image', (req, res) => {
    connection.query('SELECT * FROM Images', (error, results) => {
      if (error) throw error;
      res.json(results);
    });
  });

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
