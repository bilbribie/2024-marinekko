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
      <Nav1 />
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

        <section class = "recommended-container">
          {recommendedArray.map((bag) => {return(
            <div class = "recommended-bag-container">
              <img src = {bag.img} class = "img-container">

              </img>
              <div class = "description-container">

                <div class = "name">
                  {bag.name}
                </div>
                <div class = "catagory">
                  {bag.catagory}
                </div>
                <div class = "price">
                  {"THB " + bag.price + ".00"}
                </div>

              </div>
            </div>
          )})}
        </section>


      <Footer />
    </div>


    // <div>
    //   <Nav1 />
    //   <h1>New Collection 2024</h1>
    //   <Link to="/search">SHOP NOW</Link>
    //   <h5>-----------------------------------------------------</h5>
    //   <h1>Catagories</h1>
    //   <Link to="/search">See more</Link><br />
    //   <Link to="/search">Tote Bag</Link><br />
    //   <Link to="/search">Shoulder Bag</Link><br />
    //   <Link to="/search">Backpack</Link><br />
    //   <Link to="/search">Handbag</Link><br />
    //   <Link to="/search">Wallet</Link><br />
    //   <h5>-----------------------------------------------------</h5>
    //   <h1>For you</h1>
    //   <div className="product1" onClick={ProductClick}>
    //     <img src={`${process.env.PUBLIC_URL}/assets/IMG_2023.jpg`} alt="product1" />
    //       <h3>Mushroomy</h3>
    //       <h4>Market bag</h4>
    //       <h2>THB 2,890.00</h2>
    //   </div>
    //   <div className="product2" onClick={ProductClick}>
    //     <img src={`${process.env.PUBLIC_URL}/assets/IMG_2023.jpg`} alt="product2" />
    //       <h3>Mushroomy</h3>
    //       <h4>Market bag</h4>
    //       <h2>THB 2,890.00</h2>
    //   </div>
    //   <div className="product3" onClick={ProductClick}>
    //     <img src={`${process.env.PUBLIC_URL}/assets/IMG_2023.jpg`} alt="product3" />
    //       <h3>Mushroomy</h3>
    //       <h4>Market bag</h4>
    //       <h2>THB 2,890.00</h2>
    //   </div>
    //   <div className="product4" onClick={ProductClick}>
    //     <img src={`${process.env.PUBLIC_URL}/assets/IMG_2023.jpg`} alt="product4" />
    //       <h3>Mushroomy</h3>
    //       <h4>Market bag</h4>
    //       <h2>THB 2,890.00</h2>
    //   </div>
    //   <Footer />
    // </div>
  );
}

export default Home;
