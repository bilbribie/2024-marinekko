import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Assuming you have components Header, Nav2, and Footer
import Header from './components/header';
import Nav2 from './components/nav2';
import Footer from './components/footer';
import './style/addproduct.css';

function AddProduct() {
  const [productName, setProductName] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productColor, setProductColor] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productStock, setProductStock] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [image1, setImage1] = useState('');
  const [image2, setImage2] = useState('');
  const [image3, setImage3] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const bagData = {
      productName,
      productCategory,
      productColor,
      productPrice,
      productStock,
      productDescription,
    };
  
    // Post request to API to add a new bag
    fetch('http://localhost:3001/api/bag', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bagData)
    })
    .then(response => {
      if (!response.ok) {
        console.error('Network response was not ok');
        console.error('Response status:', response.status);
        console.error('Response text:', response.statusText);
        return; 
      }
      return response.json();
    })
    .then((bagResponse) => {
      const imageData = {
        bagId: bagResponse.bagId, 
        bagname: productName,
        image1,
        image2,
        image3,
      };
  
      fetch('http://localhost:3001/api/image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(imageData)
      })
      .then(response => {
        if (!response.ok) {
          console.error('Network response was not ok');
          console.error('Response status:', response.status);
          console.error('Response text:', response.statusText);
          return; // Exit the function early
        }
        return response.json();
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    })
    .then(() => {
      // If success
      console.log('New bag added successfully');
      navigate('/productmanage');
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <div>
      <Header />
      <Nav2 />
      <h1>Add Product</h1>
      <form className="product-form" onSubmit={handleSubmit}>
        <label>
          Product Name:
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </label>
        <label>
          Product Category:
          <select value={productCategory} onChange={(e) => setProductCategory(e.target.value)} required>
            <option value="">Select Category</option>
            <option value="Tote bag">Tote Bag</option>
            <option value="Shoulder Bag">Shoulder Bag</option>
            <option value="Backpack">Backpack</option>
            <option value="Handbag">Handbag</option>
            <option value="Wallet">Wallet</option>
          </select>
        </label>
        <label>
          Product Color:
          <select value={productColor} onChange={(e) => setProductColor(e.target.value)} required>
            <option value="">Select Color</option>
            <option value="Blue">Blue</option>
            <option value="Green">Green</option>
            <option value="Red">Red</option>
            <option value="Black">Black</option>
            <option value="White">White</option>
            <option value="Purple">Purple</option>
            <option value="Yellow">Yellow</option>
            <option value="Brown">Brown</option>
            <option value="Gray">Gray</option>
            <option value="Pink">Pink</option>
            <option value="Orange">Orange</option>
            <option value="Magenta">Magenta</option>
            <option value="Teal">Teal</option>
          </select>
        </label>
        <label>
          Product Price:
          <input
            type="number"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            required
          />
        </label>
        <label>
          Product Stock:
          <input
            type="number"
            value={productStock}
            onChange={(e) => setProductStock(e.target.value)}
            required
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            required
          />
        </label>
        <label htmlFor="image1">Image 1 URL:</label>
        <input
          id="image1"
          type="text"
          value={image1}
          onChange={(e) => setImage1(e.target.value)}
          placeholder="Enter image URL"
        />
        {image1 && <img src={image1} alt="Preview" />}

        <label htmlFor="image2">Image 2 URL:</label>
        <input
          id="image2"
          type="text"
          value={image2}
          onChange={(e) => setImage2(e.target.value)}
          placeholder="Enter image URL"
        />
        {image2 && <img src={image2} alt="Preview" />}

        <label htmlFor="image3">Image 3 URL:</label>
        <input
          id="image3"
          type="text"
          value={image3}
          onChange={(e) => setImage3(e.target.value || 'null')}
          placeholder="Enter image URL"
        />
        {image3 && <img src={image3} alt="Preview" />}
        <button type="submit">Add New Product</button>
      </form>
      <Footer />
    </div>
  );
}

export default AddProduct;
