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

  let catagoriesArray = [{name : "Tote Bag", img : process.env.PUBLIC_URL + "/assets/tote.jpg"},
                          {name : "Shoulder Bag", img : process.env.PUBLIC_URL + "/assets/shoulder.jpg"},
                          {name : "Back pack", img : process.env.PUBLIC_URL + "/assets/backpack.jpg"},
                          {name : "Handbag", img : process.env.PUBLIC_URL + "/assets/hand.jpg"},
                          {name : "Wallet", img : process.env.PUBLIC_URL + "/assets/wallet.jpg"}];

  // bag objects
  // {name, catagory, price, img}
  const BI = ["/bagSample1.jpg","/IMG_2023.jpg","/bagSample2.jpg","/IMG_2023.jpg"]
  const desp = "The Mono Mini Tote is made of organic cotton. The large Marimekko “M” is printed in the front. The small bag has handles and an open pocket on the outside\nSIZE\nHeight: 23.00 cm\nWidth: 31.00 cm\nDepth: 14.50 cm\nMain Material: 100 % Cotton\n";
  let recommendedArray = [{bagId : 1,name : "Bag1", catagory : "Tota Bag", BagStock : 3, price : 2000, color : "Red" ,img : "/bagSample1.jpg",BagImages : BI,BagDescription : desp},
                          {bagId : 2,name : "Bag2", catagory : "Tota Bag", BagStock : 30, price : 2100, color : "Blue" , img : "/bagSample2.jpg",BagImages : BI,BagDescription : desp},
                          {bagId : 3,name : "Bag3", catagory : "Shoulder Bag", BagStock : 1, price : 2200, color : "Yellow" , img : "/bagSample1.jpg",BagImages : BI,BagDescription : desp},
                          {bagId : 4,name : "Bag4", catagory : "Shoulder Bag", BagStock : 5, price : 6300, color : "Red" , img : "/bagSample2.jpg",BagImages : BI,BagDescription : desp}]


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
