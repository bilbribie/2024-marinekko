import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Nav2 from '../components/nav2';
import Header from '../components/header';
import Footer from '../components/footer';
import './style/search.css';
import "bootstrap/dist/css/bootstrap.min.css"
import PageNavBlock from '../components/pagenavblock';


let products = [];

function HandleBagRender(currentPage){
  
  const returnedList = [];

  const staticFilePath = "http://localhost:2999/picture";

  // assume 1 page contain at most 12 bags
  let bagsPerPage = 12;
  for(let i = (currentPage - 1) * bagsPerPage;i < currentPage * bagsPerPage && i < products.length;i++){
    // call api   /bag
    returnedList.push((<div class = "bag-container"><Link class = "NoDecorate" to = "/bag" state = {products[i]}>
    <img src = {staticFilePath + products[i].img} alt = {products.name}></img>
    <div class = "bag-description-container">
      <div class = "name">{products[i].name}</div>
      <div class = "category">{products[i].category}</div>
      <div class = "price">{"THB " + products[i].price + ".00"}</div>
      
    </div></Link>
  </div>));
  }
  return returnedList;

}


function Search() {
  
  const [reload,setReload] = useState(true);
  const [hasLoad,setHasLoad] = useState(true);
  const [numberOfPage,setNumberOfPage] = useState(1);
  const [currentPage,setCurrentPage] = useState(1);

  useEffect(() => {
    fetch("http://localhost:2999/search_api_bag")
    .then(res => res.json())
    .then(data => {products = data;
      // alert(JSON.stringify(data));
      setNumberOfPage(Math.floor(products.length/12) + 1);
      setCurrentPage(1)})
    .then(setReload(!reload))
    
  },[hasLoad]);


  useEffect(() => { // reload the page without triggering reset???
    setReload(!reload);
  },[reload]);


  const handleBagSearch = () => {
    const name = document.getElementById("searchName").value;
    const category = document.getElementById("category").value;
    const color = document.getElementById("color").value;
    const priceRange = document.getElementById("priceRange").value;
    let url;
    url = `http://localhost:2999/search_api_query/?name=${name}&category=${category}&color=${color}&priceRange=${priceRange}`;

    fetch(url)
    .then(res => res.json())
    .then(data => {products = data; 
      // alert(JSON.stringify(data));
      setNumberOfPage(Math.floor(products.length/12) + 1);
      setCurrentPage(1)})
    .then(setReload(!reload));
  }

 

  //test data
  let catagoriesArray = ["Tote bag","Shoulder Bag","Backpack","Handbag","Wallet"]

  //test data
  let colorsArray = ["Blue","Green","Red","Black","White","Purple","Yellow","Brown","Gray","Pink"
                      ,"Orange","Magenta","Teal"]

  let priceRanges = [];
  for(let i = 1;i <= 10;i++){
    priceRanges.push((1000 * i) + "-" + (1000 * (1 + i)));
  }

  // if(!products){
  //   return <div>NO</div>
  // }else{
  //   return <div>{JSON.stringify(products)}</div>
  // }
  
  return (
    <div>
      <Header />
      <Nav2 />
      <div class = "page-container-search">

        <div class = "header">
        <section class = "bar">

            <div class = "searchBox">
              <input type = "text" placeholder="search" id = "searchName">
              </input>
              
              <button onClick={() => {handleBagSearch();}}>
                <img class="searchbutton" 
                src={`${process.env.PUBLIC_URL}/assets/search.png`}
                alt="Search"/>
              </button>

            </div>

            <div>
              <select name="catagories" class="form-select" id = "category" >
                <option value= "none" selected >category</option>
                {catagoriesArray.map((category) => { 
                  return (<option value= {category}>{category}</option>);
              })} 
              {/* return value may change */}
              </select>
            </div>

            <div>
              <select name="color" class="form-select" id = "color">
                <option value= "none" selected >color</option>
                {colorsArray.map((color) => { 
                  return (<option value= {color}>{color}</option>);
              })} 
              {/* return value may change */}
              </select>
            </div>
            
            <div>
              <select name="price range" class="form-select" id = "priceRange" >
                <option value= "none" selected >price</option>

                {priceRanges.map((priceRange) => (<option value = {priceRange}>{priceRange}</option>))}
              </select>
            </div>

            {/* header need fixing */}

            
        </section>
        </div>

        {products.length == 0?(
        <section class = "noBagsFound-container">
          NO BAGS FOUND
        </section>) : 
        (<><section class = "bags-container">
          {HandleBagRender(currentPage)}
        </section>
          <section class = "page-selector-container">
          <PageNavBlock currentPage = {currentPage} numberOfPage = {numberOfPage} setCurrentPage = {setCurrentPage}/>
        </section></>)}

        

        
        {/* <div>
          {`CURRENT ${currentPage}     MAXPAGE ${numberOfPage}            expected ${Math.floor(products.length/12) + 1}`}
        </div> */}

      </div>
      <Footer />
    </div>
  );
}

export default Search;
