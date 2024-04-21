import React, { useState, useEffect } from 'react';
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

  let catagoriesArray = [{ name: "Tote Bag", img: process.env.PUBLIC_URL + "/assets/tote.jpg" },
  { name: "Shoulder Bag", img: process.env.PUBLIC_URL + "/assets/shoulder.jpg" },
  { name: "Back pack", img: process.env.PUBLIC_URL + "/assets/backpack.jpg" },
  { name: "Handbag", img: process.env.PUBLIC_URL + "/assets/hand.jpg" },
  { name: "Wallet", img: process.env.PUBLIC_URL + "/assets/wallet.jpg" }];

  // bag objects
  // {name, category, price, img}

  // const BI = ["/bagSample1.jpg","/IMG_2023.jpg","/bagSample2.jpg","/IMG_2023.jpg"]
  // const desp = "The Mono Mini Tote is made of organic cotton. The large Marimekko “M” is printed in the front. The small bag has handles and an open pocket on the outside\nSIZE\nHeight: 23.00 cm\nWidth: 31.00 cm\nDepth: 14.50 cm\nMain Material: 100 % Cotton\n";
  // let recommendedArray = [{bagId : 1,name : "Bag1", category : "Tota Bag", stock : 3, price : 2000, color : "Red" ,img : "/bagSample1.jpg",BagImages : BI,description : desp},
  //                         {bagId : 2,name : "Bag2", category : "Tota Bag", stock : 30, price : 2100, color : "Blue" , img : "/bagSample2.jpg",BagImages : BI,description : desp},
  //                         {bagId : 3,name : "Bag3", category : "Shoulder Bag", stock : 1, price : 2200, color : "Yellow" , img : "/bagSample1.jpg",BagImages : BI,description : desp},
  //                         {bagId : 4,name : "Bag4", category : "Shoulder Bag", stock : 5, price : 6300, color : "Red" , img : "/bagSample2.jpg",BagImages : BI,description : desp}]

  const [bag, setBag] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/api/bag/18802')
    .then(res => {
      return res.json();
    })
    .then(data => {
      console.log(data);
      setBag(data)
    });
  }, []);

  // let recommendedArray = [{ bagId: bag.BagID, name: bag.BagName, category: bag.BagCategory, stock: bag.stock, price: bag.BagPrice, color: bag.BagColor, img: process.env.PUBLIC_URL + "/assets/shoulder.jpg", BagImages: process.env.PUBLIC_URL + "/assets/shoulder.jpg", description: bags.description },
  // // { bagId: 2, name: "Bag2", category: "Tota Bag", stock: 30, price: 2100, color: "Blue", img: "/bagSample2.jpg", BagImages: BI, description: desp },
  // // { bagId: 3, name: "Bag3", category: "Shoulder Bag", stock: 1, price: 2200, color: "Yellow", img: "/bagSample1.jpg", BagImages: BI, description: desp },
  // // { bagId: 4, name: "Bag4", category: "Shoulder Bag", stock: 5, price: 6300, color: "Red", img: "/bagSample2.jpg", BagImages: BI, description: desp }
  // ]

  return (

    <div>
      <Header />
      <Nav1 />

      <div class="page-container-home"> {/* page-container*/}

        <section class="newCollectionBackground">
          <div class="center">
            <div class="t">
              NEW Collection 2024
            </div>


            <div class="link-container">
              <Link to="/search" class="NoDecorate">
                SHOP NOW
              </Link>
            </div>

          </div>
        </section>

        <div class="horizontal-seperator"></div>

        <section class="container1">
          <div class="Title">
            Catagories
          </div>

          <section class="container1_1">
            <div class="seeButton">
              See more
            </div>

            <Link>
              <img class="nextSymbol" src={`${process.env.PUBLIC_URL}/assets/next.png`} />
            </Link>

          </section>

        </section>

        <section class="catagories-container">

          {catagoriesArray.map((category) => {
            return (
              <div class="category-container">
                <img src={category.img} class="category-picture-container"></img>
                <div class="category-name-container">
                  {category.name}
                </div>
              </div>
            )
          })}

        </section>

        <div class="horizontal-seperator"></div>

        <section class="recommended-header-container">
          For you
        </section>

        <section class="recommended">
          <p>{bag.BagID}</p>
        </section>

        {/* <Recommend products = {recommendedArray}></Recommend>  */}

      </div> {/* page-container*/}

      <Footer />
    </div>


  );
}

export default Home;
