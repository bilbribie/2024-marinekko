// Import necessary hooks and components
import React, { useState, useEffect } from 'react';
import Header from './components/header';
import Nav2 from './components/nav2';
import Footer from './components/footer';
import './style/productmanage.css';
//import PageNavBlock from './components/pagenavblock';
import { useNavigate } from 'react-router-dom';

function ProductManage() {
  const [bags, setBags] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [images, setImages] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3001/api/bag')
      .then(response => response.json())
      .then(data => {
        setBags(data);
        // Fetch images for each bag
        data.forEach(bag => {
          fetch(`http://localhost:3001/api/image/${bag.BagID}`)
            .then(response => response.json())
            .then(imageData => {
              setImages(prevImages => ({
                ...prevImages,
                [bag.BagID]: imageData[0]?.image_data1 // assuming image_data1 is the URL
              }));
            })
            .catch(error => console.error('Error fetching images:', error));
        });
      })
      .catch(error => console.error('Error fetching bags:', error));
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredBags = bags.filter(bag =>
    bag.BagName.toLowerCase().includes(searchTerm)
  );

  const handleDeleteBag = (bagId) => {
    const bagToDelete = bags.find(bag => bag.BagID === bagId);

    if (window.confirm('Are you sure you want to delete this bag?')) {
      fetch(`http://localhost:3001/api/bag/${bagId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        
        .then(data => {
          console.log(`${data.message}\nBag name: ${bagToDelete.BagName}`);
          setBags(bags.filter(bag => bag.BagID !== bagId));
        })
        .catch(error => {
          console.error('Error:', error);
          alert('Failed to delete bag: ' + error);
        });
    }
  };

  const handleEditBag = (bagId) => {
    navigate(`/editproduct/${bagId}`);
  };

  return (
    <div>
      <Header />
      <Nav2 />
      <section className="page-container-productmanagement">
        <div className="bag-manage-search">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleSearch}
            className="search-input"
          />
          <button onClick={() => navigate('/addproduct')}>Add New Product</button>
        </div>
        {/* Product table */}
        <div className="product-table">
          <table>
            <thead>
              <tr>
                <th>No.</th>
                <th>Image</th>
                <th>Name</th>
                <th>Categories</th>
                <th>Color</th>
                <th>Stock</th>
                <th>Price</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {bags.map((bag, index) => ( // Use bags, as this is the variable defined in your state
                <tr key={bag.BagID}>
                  <td>{index + 1}</td>
                  <td>
                    <img src={images[bag.BagID]} alt={bag.BagName} />
                  </td>
                  <td>{bag.BagName}</td>
                  <td>{bag.BagCategory}</td>
                  <td>{bag.BagColor}</td>
                  <td>{bag.BagStock}</td>
                  <td>{(Number(bag.BagPrice) || 0).toFixed(2)}</td>
                  <td>
                    <button onClick={() => handleEditBag(bag.BagID)}>Edit</button>
                  </td>
                  <td>
                    <button onClick={() => handleDeleteBag(bag.BagID)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default ProductManage;
