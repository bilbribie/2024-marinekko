// server
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();
const router = express();
router.use(bodyParser.json());
router.use(cors());

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// MySQL connection
const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.message);
    return;
  }
  console.log('Successfully connected to the Marinekko database.');
});

router.get('/', (req, res) => {
  res.send('Welcome to the Marinekko Bag Database API!');
});

// ;-;
/* ------------------ Product web services ----------------------- */

// Testing to receive all bag in Database
// method: get
// URL: http://localhost:3001/api/bag
//
router.get('/api/bag', (req, res) => {
  connection.query('SELECT * FROM Bag', (error, results) => {
    if (error) {
      console.error('Error fetching bags:', error);
      return res.status(500).json({ error: 'Internal Server Error', message: error.message });
    }
    res.json(results);
  });
});


// Testing to receive specific bag in Database
// method: get
// URL: http://localhost:3001/api/bag
//
// Test 1
// URL: http://localhost:3001/api/bag/18801
// 
// Test 1
// URL: http://localhost:3001/api/bag/18802
router.get('/api/bag/:id', (req, res) => {
  const bagId = req.params.id;

  if (!bagId) {
    return res.status(400).json({ error: true, message: 'Please provide a bag ID' });
  }

  connection.query('SELECT * FROM Bag WHERE BagID = ?', [bagId], (error, results) => {
    if (error) {
      console.error(`Error fetching bag with ID ${bagId}:`, error);
      return res.status(500).json({ error: 'Internal Server Error', message: error.message });
    }

    if (results.length === 0) {
      return res.status(404).json({ error: true, message: 'Bag not found' });
    }

    res.json(results[0]);
  });
});

// Testing to query bag in Database
// method: get
// URL: http://localhost:3001/search_api_query
//
// Test 1
// {
//   "BagID": 18801,
//   "BagName": "PILLOW WEEKENDER TAIFUUNI",
//   "BagCategory": "Shoulder Bag",
//   "BagColor": "Pink",
//   "BagPrice": "9900.00",
//   "BagStock": 32,
//   "BagDescription": "The padded Pillow Weekender bag is made of recycled polyester and it features the topstitched Taifuuni pattern. The quilted bag has padded handles and a long, padded shoulder strap that can be tied to the right length. The bag closes with a zipper and has a zipper pocket on the inside. The Marimekko “M” is embroidered on the front. SIZE Height: 33.00 cm Width: 45.00 cm Depth: 19.50 cm Main Material: 100 % Polyester"
// }

// Test 2
// {
//   "BagID": 18803,
//   "BagName": "CARRIER MIDI UNIKKO",
//   "BagCategory": "Tote Bag",
//   "BagColor": "Orange",
//   "BagPrice": "4410.00",
//   "BagStock": 23,
//   "BagDescription": "The Carrier Midi tote bag is made of an unbleached cotton and linen blend, and it features the large Unikko pattern flower, which is printed in Helsinki. The \"Unikko 60th anniversary\" printed cotton straps run along the sides of the bag to form the handles. This product includes 46% recycled cotton and 21% recycled linen. This product celebrates the 60th anniversary of the Unikko pattern. SIZE Height: 43.00 cm Width: 41.00 cm Strap length: 54.00 cm Main Material: 79 % Cotton, 21 % Linen"
// }
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

// Testing to check login in Database
// method: post
// URL: http://localhost:3001/api/login
//
// Test 1
// {
//   "username": "Admin_John",
//   "password": "AdminJohnd22"
// }

// Test 2
// {
//   "username": "Admin_Coffee",
//   "password": "Preaww2366"
//   }
router.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  connection.query(
    'SELECT * FROM AdminAccount WHERE AdminUsername = ? AND AdminPassword = ?',
    [username, password],
    (error, results) => {
      if (error) {
        return res.status(500).json({ error: error.message }); 
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


// Testing to receive all adminaccount in Database
// method: get
// URL: http://localhost:3001/api/adminaccount
//
router.get('/api/adminaccount', (req, res) => {
  connection.query('SELECT * FROM AdminAccount', (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});

// Testing to query bag in Database
// method: get
// URL: http://localhost:3001/api/adminaccount
//
// Test 1
// {
//   "username": "newadmin",
//   "firstName": "John",
//   "lastName": "Doe",
//   "email": "john.doe@example.com",
//   "password": "newadminpassword"
// }

// Test 2
// {
//   "username": "newadmin2",
//   "firstName": "John2",
//   "lastName": "Doe2",
//   "email": "john.doy@example.com",
//   "password": "newadminpassword111"
// }
router.post('/api/adminaccount', (req, res) => {
  const { username, firstName, lastName, email, password } = req.body;

  const insertQuery = `
    INSERT INTO AdminAccount (AdminUsername, AdminFirstName, AdminSurname, AdminEmail, AdminPassword) 
    VALUES (?, ?, ?, ?, ?)`;

  connection.query(insertQuery, [username, firstName, lastName, email, password], (error, results) => {
    if (error) {
      console.error('Error adding new admin:', error.message); 
      return res.status(500).json({ error: 'Internal Server Error', message: error.message });
    }

    res.status(201).json({ message: 'New admin added successfully', adminId: results.insertId });
  });
});

// Testing to get specific admin by id
// method: get
// URL: http://localhost:3001/search_api_query
//
// Test 1
// URL: http://localhost:3001/search_api_query/012201

// Test 2
// URL: http://localhost:3001/api/adminaccount/012205
router.get('/api/adminaccount/:adminId', (req, res) => {
  let adminId = req.params.adminId;

  if (!adminId) { 
    return res.status(400).send({ error: true, message: 'Please provide admin information' });
  }

  connection.query('SELECT * FROM AdminAccount WHERE AdminID = ?', [adminId], (error, results) => {
    if (error) {
      console.error('Error fetching admin data:', error);
      return res.status(500).send({ error: true, message: 'Error fetching admin data' });
    }
    
    if (results.length > 0) {
      res.json(results[0]);
      console.log(`Sending admin result for adminId = ${adminId}`);
    } else {
      res.status(404).send({ error: true, message: 'Admin not found' });
    }
  });
});

// Testing to get specific admin by id
// method: PUT
// URL: http://localhost:3001/api/adminaccount/
//
// Test 1
// URL: http://localhost:3001/api/adminaccount/012201
// {
//   "username": "Admin_Johny",
//   "firstName": "Updated First Name",
//   "lastName": "Updated Last Name",
//   "email": "updatedemail@example.com",
//   "password": "updatedpassword"
// }
// 
// Test 2
// URL: http://localhost:3001/api/adminaccount/012202
// {
//   "username": "Upgrade_Admin_Johny",
//   "firstName": "Updated First Name",
//   "lastName": "Updated Last Name",
//   "email": "updatedemail@example.com",
//   "password": "updatedpassword"
// }
router.put('/api/adminaccount/:adminId', (req, res) => {
  const { adminId } = req.params;
  const { username, firstName, lastName, email, password } = req.body;

  const updateQuery = `
    UPDATE AdminAccount 
    SET AdminUsername = ?, AdminFirstName = ?, AdminSurname = ?, AdminEmail = ?, AdminPassword = ?
    WHERE AdminID = ?`;

  connection.query(updateQuery, [username, firstName, lastName, email, password, adminId], (error, results) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }

    res.status(200).json({ message: 'Admin updated successfully' });
  });
});

// Testing to delete specific admin by id
// method: delete
// URL: http://localhost:3001/adminaccount
//
// Test 1
// URL: http://localhost:3001/api/adminaccount/012201
//
// Test 2
// URL: http://localhost:3001/api/adminaccount/012205
router.delete('/api/adminaccount/:adminId', (req, res) => {
  const { adminId } = req.params;

  console.log(`Attempting to delete admin with ID: ${adminId}`); 

  const deleteLoginHistoryQuery = 'DELETE FROM LoginHistory WHERE AdminID = ?';
  connection.query(deleteLoginHistoryQuery, [adminId], (error, results) => {
    if (error) {
      console.error('Delete login history error:', error.message);
      return res.status(500).json({ error: error.message });
    }

    const deleteQuery = 'DELETE FROM AdminAccount WHERE AdminID = ?';
    connection.query(deleteQuery, [adminId], (error, results) => {
      if (error) {
        console.error('Delete admin error:', error.message); 
        return res.status(500).json({ error: error.message });
      }
      if (results.affectedRows === 0) {
        console.log('No admin found to delete with ID:', adminId); 
        return res.status(404).json({ message: 'Admin not found' });
      }
      console.log(`Admin with ID: ${adminId} deleted successfully`); 
      res.status(200).json({ message: 'Admin deleted successfully' });
    });
  });
});

// Testing to get specific image by bagid
// method: get
// URL: http://localhost:3001/api/image/
//
// Test 1
// URL: http://localhost:3001/api/image/18801
//
// Test 2
// URL: http://localhost:3001/api/image/038809
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

// Testing to add new bag
// method: post
// URL: http://localhost:3001/api/bag
//
// Test 1
// {
//   "productName": "New Bag Name",
//   "productCategory": "Handbag",
//   "productColor": "White",
//   "productPrice": 100.00,
//   "productStock": 10,
//   "productDescription": "Description of the new bag"
// }
// 
// Test 2
// {
  //   "productName": "New Bag Name",
  //   "productCategory": "Tote Bag",
  //   "productColor": "Pink",
  //   "productPrice": 100.00,
  //   "productStock": 10,
  //   "productDescription": "Description of the new bag"
  // }
router.post('/api/bag', (req, res) => {
  const { productName, productCategory, productColor, productPrice, productStock, productDescription } = req.body;

  connection.query(
    'INSERT INTO Bag (BagName, BagCategory, BagColor, BagPrice, BagStock, BagDescription) VALUES (?, ?, ?, ?, ?, ?)',
    [productName, productCategory, productColor, productPrice, productStock, productDescription],
    function(error, bagResults) {
      if (error) {
        console.error('Error adding new bag:', error.message);
        return res.status(500).json({ error: 'Internal Server Error', message: error.message });
      }

      const bagId = bagResults.insertId;

      res.status(201).json({ message: 'New bag added successfully', bagId });
    }
  );
});

// Testing to add image to bag
// method: PUT
// URL: http://localhost:3001/api/image
//
// Test 1
// URL: http://localhost:3001/api/image
// {
//   "bagId": 38829,
//   "bagname": "New Bag Name",
//   "image1": "https://www.chanel.com/images//t_one///q_auto:good,f_auto,fl_lossy,dpr_1.1/w_620/classic-11-12-handbag-blue-washed-denim-gold-tone-metal-washed-denim-gold-tone-metal-packshot-artistique-vue2-a01112b16747nx158-9539462692894.jpg",
//   "image2": "https://www.chanel.com/images//t_one///q_auto:good,f_auto,fl_lossy,dpr_1.1/w_620/classic-11-12-handbag-blue-washed-denim-gold-tone-metal-washed-denim-gold-tone-metal-packshot-artistique-vue2-a01112b16747nx158-9539462692894.jpg",
//   "image3": "https://www.chanel.com/images//t_one///q_auto:good,f_auto,fl_lossy,dpr_1.1/w_620/classic-11-12-handbag-blue-washed-denim-gold-tone-metal-washed-denim-gold-tone-metal-packshot-artistique-vue2-a01112b16747nx158-9539462692894.jpg"
// }
// 
// Test 2
// URL: http://localhost:3001/search_api_query/012202
// {
//   "bagId": 38830,
//   "bagname": "New Bag Name",
//   "image1": "https://www.chanel.com/images//t_one///q_auto:good,f_auto,fl_lossy,dpr_1.1/w_620/classic-11-12-handbag-blue-washed-denim-gold-tone-metal-washed-denim-gold-tone-metal-packshot-artistique-vue2-a01112b16747nx158-9539462692894.jpg",
//   "image2": "https://www.chanel.com/images//t_one///q_auto:good,f_auto,fl_lossy,dpr_1.1/w_620/classic-11-12-handbag-blue-washed-denim-gold-tone-metal-washed-denim-gold-tone-metal-packshot-artistique-vue2-a01112b16747nx158-9539462692894.jpg",
//   "image3": "https://www.chanel.com/images//t_one///q_auto:good,f_auto,fl_lossy,dpr_1.1/w_620/classic-11-12-handbag-blue-washed-denim-gold-tone-metal-washed-denim-gold-tone-metal-packshot-artistique-vue2-a01112b16747nx158-9539462692894.jpg"
// }
router.post('/api/image', (req, res) => {
  const { bagId, bagname, image1, image2, image3 } = req.body;

  // Insert images
  connection.query(
    'INSERT INTO Images (BagID, imagename, image_data1, image_data2, image_data3) VALUES (?, ?, ?, ?, ?) ',
    [bagId, bagname, image1, image2, image3],
    function(error) {
      if (error) {
        console.error('Error adding new images:', error.message);
        return res.status(500).json({ error: 'Internal Server Error', message: error.message });
      }

      res.status(201).json({ message: 'New images added successfully' });
    }
  );
});

// Testing to delete specific image and bag by bagid
// method: delete
// URL: http://localhost:3001/api/bag/
//
// Test 1
// URL: http://localhost:3001/api/bag/018809
//
// Test 2
// URL: http://localhost:3001/api/bag/038809
router.delete('/api/bag/:bagId', (req, res) => {
  const bagId = req.params.bagId;

  // First, delete the image associated with the bag
  connection.query(
    'DELETE FROM Images WHERE BagID = ?',
    [bagId],
    (imageError, imageResults) => {
      if (imageError) {
        console.error('Error deleting image:', imageError);
        return res.status(500).json({ error: 'Internal Server Error', message: imageError.message });
      }

      // Then, delete the bag itself
      connection.query(
        'DELETE FROM Bag WHERE BagID = ?',
        [bagId],
        (bagError, bagResults) => {
          if (bagError) {
            console.error('Error deleting bag:', bagError);
            return res.status(500).json({ error: 'Internal Server Error', message: bagError.message });
          }

          res.status(200).json({ message: 'Bag and associated image deleted successfully' });
        }
      );
    }
  );
});

// Testing to update bag
// method: put
// URL: http://localhost:3001/api/bag
//
// Test 1
// URL: http://localhost:3001/api/bag/388029
// {
//   "productName": "Update Bag Name",
//   "productCategory": "Handbag",
//   "productColor": "White",
//   "productPrice": 100.00,
//   "productStock": 10,
//   "productDescription": "Description of the new bag"
// }
// 
// Test 2
// {
//   "productName": "Update Bag Name22222222",
//   "productCategory": "Handbag",
//   "productColor": "White",
//   "productPrice": 100.00,
//   "productStock": 10,
//   "productDescription": "Description of the new bag"
//   }
router.put('/api/bag/:id', (req, res) => {
  const { id } = req.params;
  const { productName, productCategory, productColor, productPrice, productStock, productDescription } = req.body;

  connection.query(
    'UPDATE Bag SET BagName=?, BagCategory=?, BagColor=?, BagPrice=?, BagStock=?, BagDescription=? WHERE BagID=?',
    [productName, productCategory, productColor, productPrice, productStock, productDescription, id],
    function (error, result) {
      if (error) {
        console.error('Error updating product details:', error.message);
        return res.status(500).json({ error: 'Internal Server Error', message: error.message });
      }

      res.status(200).json({ message: 'Product details updated successfully' });
    }
  );
});

// Testing to update image in database
// method: PUT
// URL: http://localhost:3001/api/image
//
// Test 1
// URL: http://localhost:3001/api/image/38829
// {
//   "bagId": 38829,
//   "bagname": "New Bag Name",
//   "image1": "https://www.chanel.com/images//t_one///q_auto:good,f_auto,fl_lossy,dpr_1.1/w_620/classic-11-12-handbag-blue-washed-denim-gold-tone-metal-washed-denim-gold-tone-metal-packshot-artistique-vue2-a01112b16747nx158-9539462692894.jpg",
//   "image2": "https://www.chanel.com/images//t_one///q_auto:good,f_auto,fl_lossy,dpr_1.1/w_620/classic-11-12-handbag-blue-washed-denim-gold-tone-metal-washed-denim-gold-tone-metal-packshot-artistique-vue2-a01112b16747nx158-9539462692894.jpg",
//   "image3": "https://www.chanel.com/images//t_one///q_auto:good,f_auto,fl_lossy,dpr_1.1/w_620/classic-11-12-handbag-blue-washed-denim-gold-tone-metal-washed-denim-gold-tone-metal-packshot-artistique-vue2-a01112b16747nx158-9539462692894.jpg"
// }
// 
// Test 2
// URL: http://localhost:3001/search_api_query/012202
// {
//   "bagId": 38830,
//   "bagname": "New Bag Name",
//   "image1": "https://www.chanel.com/images//t_one///q_auto:good,f_auto,fl_lossy,dpr_1.1/w_620/classic-11-12-handbag-blue-washed-denim-gold-tone-metal-washed-denim-gold-tone-metal-packshot-artistique-vue2-a01112b16747nx158-9539462692894.jpg",
//   "image2": "https://www.chanel.com/images//t_one///q_auto:good,f_auto,fl_lossy,dpr_1.1/w_620/classic-11-12-handbag-blue-washed-denim-gold-tone-metal-washed-denim-gold-tone-metal-packshot-artistique-vue2-a01112b16747nx158-9539462692894.jpg",
//   "image3": "https://www.chanel.com/images//t_one///q_auto:good,f_auto,fl_lossy,dpr_1.1/w_620/classic-11-12-handbag-blue-washed-denim-gold-tone-metal-washed-denim-gold-tone-metal-packshot-artistique-vue2-a01112b16747nx158-9539462692894.jpg"
// }
router.put('/api/image/:bagId', (req, res) => {
  const { bagId } = req.params;
  const { image1, image2, image3 } = req.body;

  connection.query(
    'UPDATE Images SET image_data1=?, image_data2=?, image_data3=? WHERE BagID=?',
    [image1, image2, image3, bagId],
    function (error, result) {
      if (error) {
        console.error('Error updating images:', error.message);
        return res.status(500).json({ error: 'Internal Server Error', message: error.message });
      }

      res.status(200).json({ message: 'Image details updated successfully' });
    }
  );
});


const PORT = process.env.PORT;
router.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
