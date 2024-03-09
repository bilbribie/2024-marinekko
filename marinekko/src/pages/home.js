import React from 'react';
import Nav1 from '../components/nav1';
import Footer from '../components/footer';
import { Link, useNavigate } from 'react-router-dom';
import './style/home.css';

function Home() {
  const navigate = useNavigate();

  const ProductClick = (event) => {
    event.preventDefault(); 
    navigate('/detail');
  };

  return (
    <div>
      <Nav1 />
      <h1>New Collection 2024</h1>
      <Link to="/search">SHOP NOW</Link>
      <h5>-----------------------------------------------------</h5>
      <h1>Catagories</h1>
      <Link to="/search">See more</Link><br />
      <Link to="/search">Tote Bag</Link><br />
      <Link to="/search">Shoulder Bag</Link><br />
      <Link to="/search">Backpack</Link><br />
      <Link to="/search">Handbag</Link><br />
      <Link to="/search">Wallet</Link><br />
      <h5>-----------------------------------------------------</h5>
      <h1>For you</h1>
      <div className="product1" onClick={ProductClick}>
        <img src={`${process.env.PUBLIC_URL}/assets/IMG_2023.jpg`} alt="product1" />
          <h3>Mushroomy</h3>
          <h4>Market bag</h4>
          <h2>THB 2,890.00</h2>
      </div>
      <div className="product2" onClick={ProductClick}>
        <img src={`${process.env.PUBLIC_URL}/assets/IMG_2023.jpg`} alt="product2" />
          <h3>Mushroomy</h3>
          <h4>Market bag</h4>
          <h2>THB 2,890.00</h2>
      </div>
      <div className="product3" onClick={ProductClick}>
        <img src={`${process.env.PUBLIC_URL}/assets/IMG_2023.jpg`} alt="product3" />
          <h3>Mushroomy</h3>
          <h4>Market bag</h4>
          <h2>THB 2,890.00</h2>
      </div>
      <div className="product4" onClick={ProductClick}>
        <img src={`${process.env.PUBLIC_URL}/assets/IMG_2023.jpg`} alt="product4" />
          <h3>Mushroomy</h3>
          <h4>Market bag</h4>
          <h2>THB 2,890.00</h2>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
