import React, { useState, useEffect } from 'react';
import Nav1 from './components/nav1';
import Header from './components/header';
import Footer from './components/footer';
import Recommend from './components/recommend';
import { Link } from 'react-router-dom';
import './style/home.css';

function Home() {
  let categoriesArray = [{ name: "Tote Bag", img: "/assets/tote.jpg" },
    { name: "Shoulder Bag", img: "/assets/shoulder.jpg" },
    { name: "Backpack", img: "/assets/backpack.jpg" },
    { name: "Handbag", img: "/assets/hand.jpg" },
    { name: "Wallet", img: "/assets/wallet.jpg" }];

  const [recommendedArray, setRecommendedArray] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/bag')
      .then(res => res.json())
      .then(allBags => {
        const bagIds = allBags.map(bag => bag.BagID);
        const selectedIds = bagIds.sort(() => 0.5 - Math.random()).slice(0, 4);
        return Promise.all(selectedIds.map(bagId =>
          fetch(`http://localhost:3001/api/bag/${bagId}`)
            .then(res => res.json())
            .then(bagDetails => fetch(`http://localhost:3001/api/image/${bagId}`)
              .then(res => res.json())
              .then(images => {
                const imageObj = images.find(img => img.image_data1 || img.image_data2 || img.image_data3);
                const imageUrl = imageObj
                  ? (imageObj.image_data1 || imageObj.image_data2 || imageObj.image_data3)
                  : null;
                return { ...bagDetails, imageUrl };
              })
            )
        ));
      })
      .then(recommendedBags => {
        setRecommendedArray(recommendedBags);
      })
      .catch(error => {
        console.error('Error fetching bags or images:', error);
      });
  }, []);

  return (
    <div>
      <Header />
      <Nav1 />
      <div className="page-container-home">
        <section className="newCollectionBackground">
          <div className="center">
            <div className="t">
              NEW Collection 2024
            </div>
            <div className="link-container">
              <Link to="/search" className="NoDecorate">
                SHOP NOW
              </Link>
            </div>
          </div>
        </section>
        <div className="horizontal-seperator"></div>
        <section className="container1">
          <div className="Title">
            Categories
          </div>
          <section className="container1_1">
            <div className="seeButton">
              See more
            </div>
            <Link to="#">
              <img className="nextSymbol" src="/assets/next.png" alt="Next" />
            </Link>
          </section>
        </section>
        <section className="categories-container">
          {categoriesArray.map((category, index) => (
            <div className="category-container" key={index}>
              <img src={category.img} className="category-picture-container" alt={category.name} />
              <div className="category-name-container">
                {category.name}
              </div>
            </div>
          ))}
        </section>
        <div className="horizontal-seperator"></div>
        <section className="recommended-header-container">
          For you
        </section>
        <Recommend bagsArray={recommendedArray} />
      </div>
      <Footer />
    </div>
  )
}

export default Home;
