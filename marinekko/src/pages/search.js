import React from 'react';
import Nav2 from '../components/nav2';
import Footer from '../components/footer';
import { Link, useNavigate } from 'react-router-dom';

function ProductManage() {
  /*
  const navigate = useNavigate();

  const ProductClick = (event) => {
    event.preventDefault(); 
    navigate('/detail');
  };
  */
  return (
    <div>
      <Nav2 />
      
      <Footer />
    </div>
  );
}

export default ProductManage;
