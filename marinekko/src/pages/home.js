import React from 'react';
import Nav1 from '../components/nav1';
import Header from '../components/header';
import Recommend from '../components/recommend';
import Footer from '../components/footer';
import { Link, useNavigate } from 'react-router-dom';
import './style/home.css';

function Home() {

  const navigate = useNavigate();

  const ProductClick = (event) => {
    event.preventDefault(); 
    navigate('/detail');
  };

  let catagoriesArray = [{name : "Tote Bag", img : process.env.PUBLIC_URL + "/assets/IMG_2023.jpg"},
                          {name : "Shoulder Bag", img : process.env.PUBLIC_URL + "/assets/IMG_2023.jpg"},
                          {name : "Back pack", img : process.env.PUBLIC_URL + "/assets/IMG_2023.jpg"},
                          {name : "Handbag", img : process.env.PUBLIC_URL + "/assets/IMG_2023.jpg"},
                          {name : "Wallet", img : process.env.PUBLIC_URL + "/assets/IMG_2023.jpg"}];

  // bag objects
  // {name, catagory, price, img}
  let recommendedArray = [{name : "Bag1", catagory : "Tota Bag", price : 2000, img : process.env.PUBLIC_URL + "/assets/bagSample1.jpg"},
                          {name : "Bag2", catagory : "Tota Bag", price : 2100, img : process.env.PUBLIC_URL + "/assets/bagSample2.jpg"},
                          {name : "Bag3", catagory : "Shoulder Bag", price : 2200, img : process.env.PUBLIC_URL + "/assets/bagSample1.jpg"},
                          {name : "Bag4", catagory : "Shoulder Bag", price : 6300, img : process.env.PUBLIC_URL + "/assets/bagSample2.jpg"}]


  return (

    <div>
      <Header />
      <Nav1 />

      <div class = "page-container-home"> {/* page-container*/}

        <section class = "newCollectionBackground">
          <div class = "center">
            <div class = "t">
              NEW Collection 2024
            </div>


            <div class = "link-container">
              <Link to="/search" class = "NoDecorate">
                SHOP NOW
              </Link>
            </div>
            
          </div>
        </section>

        <div class = "horizontal-seperator"></div>

        <section class = "container1">
          <div class = "Title">
            Catagories
          </div>

          <section class = "container1_1">
            <div class = "seeButton">
              See more
            </div>

            <Link>
              <img class="nextSymbol" src={`${process.env.PUBLIC_URL}/assets/next.png`} />  
            </Link>
        
          </section>
          
        </section>
          
        <section class = "catagories-container">

          {catagoriesArray.map((catagory) => {return (
            <div class = "catagory-container">
              <img src = {catagory.img} class = "catagory-picture-container"></img>
              <div class = "catagory-name-container">
                {catagory.name}
              </div>
            </div>
          )})}

        </section>
        
        <div class = "horizontal-seperator"></div>

        

        <section class = "recommended-header-container">
            For you
        </section>

        <Recommend bagsArray = {recommendedArray}></Recommend>

      </div> {/* page-container*/}

      <Footer />
    </div>


  );
}

export default Home;
