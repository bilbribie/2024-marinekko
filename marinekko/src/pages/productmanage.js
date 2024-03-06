import React from 'react';
import Nav2 from '../components/nav2';
import Footer from '../components/footer';
import { Link, useNavigate } from 'react-router-dom';


function ProductManage() {
    
    const navigate = useNavigate();
  
    const EditProduct = (event) => {
        event.preventDefault(); 
        navigate('/addproduct');
      };
    const handleSearchIconClick = (event) => { // edit search button hear
        event.preventDefault(); 
        navigate('/productmanage');
    };
  
    return (
      <div>
        <Nav2 />
        <div className="ProductManagement">
            <img src={`${process.env.PUBLIC_URL}/assets/.png`} alt="productmanage" />
            <h1>Products Management</h1>
            <Link to="/addproduct">Add new</Link>
        </div>
        <div>
        <input type="text" placeholder="Search..." />
        <button>
          <img 
              src={`${process.env.PUBLIC_URL}/assets/search.png`} 
              alt="Search" 
              onClick={handleSearchIconClick} // Attach the click handler here
          />
        </button>
        </div>

        <Footer />
      </div>
    );
  }
  
  export default ProductManage;