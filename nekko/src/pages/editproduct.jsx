import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from './components/header';
import Nav2 from './components/nav2';
import Footer from './components/footer';
import './style/editproduct.css';

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    productName: '',
    productCategory: '',
    productColor: '',
    productPrice: '',
    productStock: '',
    productDescription: '',
  });
  const [originalImages, setOriginalImages] = useState(['', '', '']);
  const [newImages, setNewImages] = useState(['', '', '']);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3001/api/bag/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct({
          productName: data.BagName,
          productCategory: data.BagCategory,
          productColor: data.BagColor,
          productPrice: data.BagPrice,
          productStock: data.BagStock,
          productDescription: data.BagDescription,
        });
      });

    fetch(`http://localhost:3001/api/image/${id}`)
      .then((res) => res.json())
      .then((imagesData) => {
        console.log("imagesData:", imagesData);

        const originalImagesArray = ['', '', ''];
        const newImagesArray = ['', '', ''];

        imagesData.forEach((img) => {
          if (img.image_data1) {
            originalImagesArray[0] = img.image_data1;
            newImagesArray[0] = img.image_data1;
          }
          if (img.image_data2) {
            originalImagesArray[1] = img.image_data2;
            newImagesArray[1] = img.image_data2;
          }
          if (img.image_data3) {
            originalImagesArray[2] = img.image_data3;
            newImagesArray[2] = img.image_data3;
          }
        });

        setOriginalImages(originalImagesArray);
        setNewImages(newImagesArray);
        setIsLoading(false);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [id]);

  const handleCategoryChange = (event) => {
    setProduct({ ...product, productCategory: event.target.value });
  };

  const handleColorChange = (event) => {
    setProduct({ ...product, productColor: event.target.value });
  };

  const handleImageChange = (index, e) => {
    const updatedImageUrl = e.target.value;
    setNewImages({
      ...newImages,
      [index]: updatedImageUrl
    });
  
    if (index < originalImages.length) {
      setOriginalImages(prevImages => {
        const updatedImages = [...prevImages];
        updatedImages[index] = updatedImageUrl;
        return updatedImages;
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const bagData = {
      productName: product.productName,
      productCategory: product.productCategory,
      productColor: product.productColor,
      productPrice: product.productPrice,
      productStock: product.productStock,
      productDescription: product.productDescription,
    };

    fetch(`http://localhost:3001/api/bag/${id}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(bagData)
    })
    .then(response => {
      console.log(bagData);
      if (!response.ok) throw new Error('Error updating product details');
      return response.json();
    })
    .then(() => {
      const imageData = {
        bagId: id, 
        image1: newImages[0],
        image2: newImages[1],
        image3: newImages[2],
      };

      fetch(`http://localhost:3001/api/image/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(imageData)
      })
      .then(response => {
        console.log(imageData);
        if (!response.ok) throw new Error('Error updating images');
        return response.json();
      })
      .then(() => {
        alert('Product updated successfully!');
        navigate('/productmanage');
      })
      .catch(error => {
        console.error('Error updating images:', error);
      });
    })
    .catch(error => {
      console.error('Error updating product:', error);
    });
  };
  
  if (isLoading) {
    return <div>Loading...</div>;
  }
  // Render the product form
  return (
    <div>
      <Header />
      <Nav2 />
      <div className="edit-product-container">
        <h1>Edit Product</h1>
        <form onSubmit={handleSubmit}>
        <label>
          Product Name:
          <input
            type="text"
            value={product.productName}
            onChange={(e) => setProduct({ ...product, productName: e.target.value })}
          />
        </label>
          <label>
            Product Category:
            <select
              value={product.productCategory} onChange={handleCategoryChange} required>
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
            <select value={product.productColor} onChange={handleColorChange} required>
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
          Stock:
          <input
            type="number" 
            value={product.productStock}
            onChange={(e) => setProduct({ ...product, productStock: e.target.value })}
          />
        </label>
        <label>
          Price:
          <input
            type="text"
            value={product.productPrice}
            onChange={(e) => setProduct({ ...product, productPrice: e.target.value })}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            value={product.productDescription}
            onChange={(e) => setProduct({ ...product, productDescription: e.target.value })}
          />
        </label>
        {/* Image inputs */}
        {[0, 1, 2].map(index => (
            <div key={`image_${index}`}>
              <label htmlFor={`image${index + 1}`}>Image {index + 1} URL:</label>
              <input
                id={`image${index + 1}`}
                type="text"
                value={newImages[index] || ''}
                onChange={(e) => handleImageChange(index, e)}
                placeholder="Enter image URL"
              />
              {originalImages[index] && (
                <img src={originalImages[index]} alt={`Original Image ${index + 1}`} />
              )}
              <br />
            </div>
          ))}
          <button type="submit">Save Changes</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default EditProduct;
