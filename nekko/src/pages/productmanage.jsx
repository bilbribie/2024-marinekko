import React, { useState, useEffect } from 'react';
import Header from './components/header';
import Nav2 from './components/nav2';
import Footer from './components/footer';
import { Link } from 'react-router-dom';
import './style/productmanage.css'
import PageNavBlock from './components/pagenavblock';


function ProductManage() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    fetch('http://localhost:3001/api/bag')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  };

  const renderProductRows = () => {
    return products.length > 0 ? (
      products
        .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
        .map((product, index) => (
          <tr key={index}>
            <td>{product.BagID}</td>
            <td>
              <img className="lowerBrightness" src={product.BagImages[0]} alt={product.BagName} />
            </td>
            {/* Add conditional rendering for product.BagName and product.BagCategory */}
            <td>{product.BagName || 'N/A'}</td>
            <td>{product.BagCategory || 'N/A'}</td>
            <td>{product.BagColor.join(', ')}</td>
            <td>{product.BagStock}</td>
            <td>{`${product.BagPrice}.00`}</td>
            <td>
              <Link to={`/editproduct/${product.BagID}`}>
                <img className="editButton" src={process.env.PUBLIC_URL + "/assets/edit-text.png"} alt="Edit" />
              </Link>
            </td>
            <td>
              <button className="editButton" onClick={() => deleteProduct(product.BagID)}>Delete</button>
            </td>
          </tr>
        ))
    ) : null; // Return null if products array is empty
  };
  

const deleteProduct = (productId) => {
  fetch(`http://localhost:3001/api/bag/${productId}`, {
      method: 'DELETE'
  })
      .then(response => {
          if (response.ok) {
              fetchProducts(); // Fetch products again to update the list
          }
      })
      .catch(error => console.error('Error deleting product:', error));
};

  return (
    <div>
      <Header />
      <Nav2 />

      <section class="page-container-productmanagement">

        <section class="nav">

          <div class="left">
            <img class="logo" src={"./assets/product.png"} alt="productmanage" />
            Product management
          </div>

          <div class="right">
            <Link to="/addproduct" className="addButton">
              Add New
            </Link>
          </div>

        </section>

        <section class="mainNav">
          {/* Search and category buttons */}

          <div class="container flex-start">
            <div class="searchBar">
              <input class="searchInput" placeholder='search' type="text"></input>
              <img class="searchButton" src={"./assets/search.png"}></img>
            </div>
          </div>
          <div class="container center">
            <div class="catagoryButton">
              <img class="searchButton" src={"./assets/down-arrow.png"}></img>
              catagory
            </div>
          </div>
          <div class="container"></div>

        </section>

        {/* {totalProduct + " Products"} */}

        <section class="edit-table-container">
          <table class="edit-table">

            <thead>
              <tr>

                <th>No.</th>
                <th></th>
                <th>Name:</th>
                <th>catagories:</th>
                <th>Color:</th>
                <th>Stock:</th>
                <th>Price:</th>
                <th></th>
                <th></th>

              </tr>
            </thead>

            <tbody>

            {renderProductRows()}

            </tbody>


          </table>
        </section>

        <PageNavBlock currentPage={currentPage} numberOfPage={Math.ceil(products.length / itemsPerPage)} setCurrentPage={setCurrentPage} />

      </section>



      <Footer />
    </div>
  );
}

export default ProductManage;