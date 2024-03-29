import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav1 from '../components/nav1';
import Header from '../components/header';
import Footer from '../components/footer';
import './style/search.css';
import "bootstrap/dist/css/bootstrap.min.css"
import PageNavBlock from '../components/pagenavblock';

function HandleBagRender(bagsArray,currentPage){
  const returnedList = [];

  
  // assume 1 page contain at most 12 bags
  let bagsPerPage = 12;
  for(let i = (currentPage - 1) * bagsPerPage;i < currentPage * bagsPerPage && i < bagsArray.length;i++){
    returnedList.push((<div class = "bag-container"><Link class = "NoDecorate" to = "/bag">
    <img src = {bagsArray[i].img}></img>
    <div class = "bag-description-container">

      <div class = "name">{bagsArray[i].name}</div>
      <div class = "catagory">{bagsArray[i].catagory}</div>
      <div class = "price">{"THB " + bagsArray[i].price + ".00"}</div>
      
    </div></Link>
  </div>));
  }
  return returnedList;

}





function Search() {
  /*
  const navigate = useNavigate();

  const ProductClick = (event) => {
    event.preventDefault(); 
    navigate('/detail');
  };
  */


  const [numberOfPage,setNumberOfPage] = useState(2);
  const [currentPage,setCurrentPage] = useState(1);

  //test data
  let bagsArray = [{name : "Bag1", catagory : "Tota Bag", price : 2000, img : process.env.PUBLIC_URL + "/assets/bagSample1.jpg"},
                          {name : "Bag2", catagory : "Tota Bag", price : 2100, img : process.env.PUBLIC_URL + "/assets/bagSample2.jpg"},
                          {name : "Bag3", catagory : "Shoulder Bag", price : 2200, img : process.env.PUBLIC_URL + "/assets/bagSample1.jpg"},
                          {name : "Bag4", catagory : "Shoulder Bag", price : 6300, img : process.env.PUBLIC_URL + "/assets/bagSample2.jpg"},
                          {name : "Bag5", catagory : "Tota Bag", price : 2000, img : process.env.PUBLIC_URL + "/assets/bagSample1.jpg"},
                          {name : "Bag6", catagory : "Tota Bag", price : 2100, img : process.env.PUBLIC_URL + "/assets/bagSample2.jpg"},
                          {name : "Bag7", catagory : "Shoulder Bag", price : 2200, img : process.env.PUBLIC_URL + "/assets/bagSample1.jpg"},
                          {name : "Bag8", catagory : "Shoulder Bag", price : 6300, img : process.env.PUBLIC_URL + "/assets/bagSample2.jpg"},
                          {name : "Bag9", catagory : "Tota Bag", price : 2000, img : process.env.PUBLIC_URL + "/assets/bagSample1.jpg"},
                          {name : "Bag10", catagory : "Tota Bag", price : 2100, img : process.env.PUBLIC_URL + "/assets/bagSample2.jpg"},
                          {name : "Bag11", catagory : "Tota Bag", price : 2100, img : process.env.PUBLIC_URL + "/assets/bagSample2.jpg"},
                          {name : "Bag12", catagory : "Shoulder Bag", price : 2200, img : process.env.PUBLIC_URL + "/assets/bagSample1.jpg"},
                          {name : "Bag13", catagory : "Shoulder Bag", price : 6300, img : process.env.PUBLIC_URL + "/assets/bagSample2.jpg"},
                          {name : "Bag14", catagory : "Tota Bag", price : 2000, img : process.env.PUBLIC_URL + "/assets/bagSample1.jpg"},
                          {name : "Bag15", catagory : "Tota Bag", price : 2100, img : process.env.PUBLIC_URL + "/assets/bagSample2.jpg"},
                          {name : "Bag16", catagory : "Shoulder Bag", price : 2200, img : process.env.PUBLIC_URL + "/assets/bagSample1.jpg"},
                          {name : "Bag17", catagory : "Shoulder Bag", price : 6300, img : process.env.PUBLIC_URL + "/assets/bagSample2.jpg"},
                          {name : "Bag18", catagory : "Tota Bag", price : 2000, img : process.env.PUBLIC_URL + "/assets/bagSample1.jpg"},
                          {name : "Bag19", catagory : "Tota Bag", price : 2100, img : process.env.PUBLIC_URL + "/assets/bagSample2.jpg"}
                        ]

  //test data
  let catagoriesArray = ["Tote bag","Shoulder Bag","Backpack","Handbag","Wallet"]

  //test data
  let colorsArray = ["Blue","Green","Red","Black","White","Purple","Yellow","Brown","Gray","Pink"
                      ,"Orange","Magenta","Teal"]

  let priceRanges = [];
  for(let i = 1;i <= 10;i++){
    priceRanges.push((1000 * i) + "-" + (1000 * (1 + i)));
  }
  
  return (
    <div>
      {/* <Nav2 /> */}
      <Header />
      <Nav1 />
      <div class = "page-container-search">

        <div class = "header">
        <section class = "bar">

            <div class = "searchBox">
              <input type = "text" placeholder="search">
              </input>
              <img class="searchbutton"
              src={`${process.env.PUBLIC_URL}/assets/search.png`}
              alt="Search"/>
            </div>

            <div>
              <select name="catagories" class="form-select" >
                <option value= "none" selected >catagory</option>
                {catagoriesArray.map((catagory) => { 
                  return (<option value= {catagory}>{catagory}</option>);
              })} 
              {/* return value may change */}
              </select>
            </div>

            <div>
              <select name="color" class="form-select" >
                <option value= "none" selected >color</option>
                {colorsArray.map((color) => { 
                  return (<option value= {color}>{color}</option>);
              })} 
              {/* return value may change */}
              </select>
            </div>
            
            <div>
              <select name="price range" class="form-select" >
                <option value= "none" selected >price</option>

                {priceRanges.map((priceRange) => (<option value = {priceRange}>{priceRange}</option>))}
              </select>
            </div>

            {/* header need fixing */}

            
        </section>
        </div>

        <section class = "bags-container">
          
          {HandleBagRender(bagsArray,currentPage)}
                
        </section>

        <section class = "page-selector-container">

          <PageNavBlock currentPage = {currentPage} numberOfPage = {numberOfPage} setCurrentPage = {setCurrentPage}/>
        
        </section>

      </div>
      <Footer />
    </div>
  );
}

export default Search;
