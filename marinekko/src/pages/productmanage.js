import React, { useState } from 'react';
import Header from '../components/header';
import Nav2 from '../components/nav2';
import Footer from '../components/footer';
import { Link } from 'react-router-dom';
import './style/productmanage.css'
import PageNavBlock from '../components/pagenavblock';


function ProductManage() {
    
    // const navigate = useNavigate();
  
    // const EditProduct = (event) => {
    //     event.preventDefault(); 
    //     navigate('/addproduct');
    //   };
    // const handleSearchIconClick = (event) => { // edit search button hear
    //     event.preventDefault(); 
    //     navigate('/productmanage');
    // };



    const testBag = {BagID : 1,
      BagName : "your Favorite bag",
      BagCatagory : "Backpack",
      BagColor : ["magenta","purple"],
      BagPrice : 2999,
      BagStock : 3,
      BagDescription : "The Mono Mini Tote is made of organic cotton. The large Marimekko “M” is printed in the front. The small bag has handles and an open pocket on the outside\nSIZE\nHeight: 23.00 cm\nWidth: 31.00 cm\nDepth: 14.50 cm\nMain Material: 100 % Cotton\n",
      BagImages : [process.env.PUBLIC_URL + "/assets/bagSample1.jpg",
      process.env.PUBLIC_URL + "/assets/IMG_2023.jpg",
      process.env.PUBLIC_URL + "/assets/bagSample2.jpg",
      process.env.PUBLIC_URL + "/assets/IMG_2023.jpg"]}

    const bagsArray = [testBag,testBag,testBag,testBag,testBag,testBag,testBag,testBag
      ,testBag,testBag,testBag,testBag,testBag,testBag,testBag,testBag,testBag,testBag];

    const [totalProduct,setTotalProduct] = useState(bagsArray.length);
    const itemPerPage = 10;
    const [totalPage,setTotalPage] = useState(Math.floor(totalProduct/itemPerPage) + 1);
    const [currentPage,setCurrentPage] = useState(1);


    function renderBagsRow(){
      const returnedList = [];
      for(let i = (currentPage - 1) * itemPerPage;i < currentPage * itemPerPage && i < bagsArray.length;i++){
        returnedList.push(<tr>
          <td>{i}</td>
          <td><img class = "lowerBrightness" src = {bagsArray[i].BagImages[0]}></img></td>
          <td>{bagsArray[i].BagName}</td>
          <td>{bagsArray[i].BagCatagory}</td>
          <td>{bagsArray[i].BagColor}</td>
          <td>{bagsArray[i].BagStock}</td>
          <td>{bagsArray[i].BagPrice + ".00"}</td>
          <td><img class = "editButton" src = {process.env.PUBLIC_URL + "/assets/edit-text.png"}></img></td>
          <td><img class = "editButton" src = {process.env.PUBLIC_URL + "/assets/edit-text.png"}></img></td>
        </tr>);
      }
      return returnedList;
    }


  
    return (
      <div>
        <Header />
        <Nav2 />

        <section class = "page-container-productmanagement">

            <section class = "nav">

              <div class = "left">
              <img class = "logo" src={process.env.PUBLIC_URL + "/assets/product.png"} alt="productmanage" />
              Product management
              </div>

              <div class = "right">
                <button class = "addButton">
                  add new
                </button>
              </div>
              
            </section>

            <section class = "mainNav">

              <div class = "container flex-start">
                  <div class = "searchBar">
                    <input class = "searchInput" placeholder='search' type="text"></input>
                    <img class = "searchButton" src = {process.env.PUBLIC_URL + "/assets/search.png"}></img>
                  </div>
              </div>
              <div class = "container center">
                  <div class = "catagoryButton">
                    <img class = "searchButton" src = {process.env.PUBLIC_URL + "/assets/down-arrow.png"}></img>
                    catagory
                  </div>
              </div>
              <div class = "container"></div>
            
            </section>

            {/* {totalProduct + " Products"} */}

            <section class = "edit-table-container">
              <table class = "edit-table">

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

                    {renderBagsRow()}

                </tbody>
                
                
              </table>
            </section>

            {<PageNavBlock currentPage = {currentPage} numberOfPage = {totalPage} setCurrentPage = {setCurrentPage}/>}

        </section>
        


        <Footer />
      </div>
    );
  }
  
  export default ProductManage;