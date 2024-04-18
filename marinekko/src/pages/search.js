import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Nav2 from '../components/nav2';
import Header from '../components/header';
import Footer from '../components/footer';
import './style/search.css';
import "bootstrap/dist/css/bootstrap.min.css"
import PageNavBlock from '../components/pagenavblock';


let bagsArray = [];

function HandleBagRender(currentPage){
  
  const returnedList = [];

  const staticFilePath = "http://localhost:2999/picture";

  // assume 1 page contain at most 12 bags
  let bagsPerPage = 12;
  for(let i = (currentPage - 1) * bagsPerPage;i < currentPage * bagsPerPage && i < bagsArray.length;i++){
    // call api   /bag
    returnedList.push((<div class = "bag-container"><Link class = "NoDecorate" to = "/bag" state = {bagsArray[i]}>
    <img src = {staticFilePath + bagsArray[i].img} alt = {bagsArray.name}></img>
    <div class = "bag-description-container">
      <div class = "name">{bagsArray[i].name}</div>
      <div class = "catagory">{bagsArray[i].catagory}</div>
      <div class = "price">{"THB " + bagsArray[i].price + ".00"}</div>
      
    </div></Link>
  </div>));
  }
  return returnedList;
  // bagId = {bagsArray[i].bagId}

}


function Search() {
  
  const [reload,setReload] = useState(true);
  const [hasLoad,setHasLoad] = useState(true);
  const [numberOfPage,setNumberOfPage] = useState(1);
  const [currentPage,setCurrentPage] = useState(1);

  useEffect(() => {
    fetch("http://localhost:2999/search_api")
    .then(res => res.json())
    .then(data => {bagsArray = data;
      // alert(JSON.stringify(data));
      setNumberOfPage(Math.floor(bagsArray.length/12) + 1);
      setCurrentPage(1)})
    .then(setReload(!reload))
    
  },[hasLoad]);


  useEffect(() => { // reload the page without triggering reset???
    setReload(!reload);
  },[reload]);


  const handleBagSearch = () => {
    const name = document.getElementById("searchName").value;
    const catagory = document.getElementById("catagory").value;
    const color = document.getElementById("color").value;
    const priceRange = document.getElementById("priceRange").value;
    let url;
    url = `http://localhost:2999/search_api_query/?name=${name}&catagory=${catagory}&color=${color}&priceRange=${priceRange}`;

    fetch(url)
    .then(res => res.json())
    .then(data => {bagsArray = data; 
      // alert(JSON.stringify(data));
      setNumberOfPage(Math.floor(bagsArray.length/12) + 1);
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

  // if(!bagsArray){
  //   return <div>NO</div>
  // }else{
  //   return <div>{JSON.stringify(bagsArray)}</div>
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
              <select name="catagories" class="form-select" id = "catagory" >
                <option value= "none" selected >catagory</option>
                {catagoriesArray.map((catagory) => { 
                  return (<option value= {catagory}>{catagory}</option>);
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

        {bagsArray.length == 0?(
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
          {`CURRENT ${currentPage}     MAXPAGE ${numberOfPage}            expected ${Math.floor(bagsArray.length/12) + 1}`}
        </div> */}

      </div>
      <Footer />
    </div>
  );
}

export default Search;
