import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import Nav2 from '../components/nav2';
import Footer from '../components/footer';
import './style/productmanage.css'
import PageNavBlock from '../components/pagenavblock';
import { Link } from 'react-router-dom';
import ConfirmPopup from '../components/confirmpopup';
import ReportPopup from '../components/reportpopup';

function ProductManage() {
    
    const staticFilePath = "http://localhost:2999/picture"; // this may be changed

    const itemPerPage = 10;
    const [totalPage,setTotalPage] = useState(1);
    const [currentPage,setCurrentPage] = useState(1);
    const [products,setProducts] = useState([]);


    // featch control state
    const [hasLoad,setHasLoad] = useState(true);
    const [reload,setReload] = useState(true);
    const [searchName,setSearchName] = useState('');


    // pop up control state
    const [popConfirm,setPopConfirm] = useState(false);
    const [popReport,setPopReport] = useState(false);
    const [error,setError] = useState(false);
    const [deleteId,setDeleteId] = useState(0);
    // state for delete method error
    // state for showing data via popup


    useEffect(() => {
      
      fetch('http://localhost:2999/search_api_bag') // 'http://localhost:3001/api/bag'
      .then(response => response.json())
      .then(data => {setProducts(data);setTotalPage(Math.floor(data.length/itemPerPage) + 1);setCurrentPage(1);})
      .then(setReload(!reload))
      .catch(error => console.error('Error fetching products:', error));

    }, [hasLoad]);


    useEffect(() => { // reload the page without triggering reset???
      setReload(!reload);
    },[reload]);


    const handleSearchBagByName = () => {

      let url;
      url = `http://localhost:2999/search_api_query/?name=${searchName}&category=none&color=none&priceRange=none`;

      fetch(url)
      .then(res => res.json())
      .then(data => {setProducts(data); 
        setTotalPage(Math.floor(data.length/itemPerPage) + 1);
        setCurrentPage(1)})
      .then(setReload(!reload));
  
    }

    const handleDeleteBag = () => {

      fetch('http://localhost:2999/delete_api_bag', 
      { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, 
      body: JSON.stringify({id : deleteId})})
      .then(response => response.json())
      .then(data => {
        setError(data.error);
      })
      .then(() => {setPopReport(true)})
      .catch(error => {
        console.error('Error:', error);
        setError('Login Failed: ' + error.message);  // Set error message
      });

    }


    function renderBagsRow(){
      const returnedList = [];
      for(let i = (currentPage - 1) * itemPerPage;i < currentPage * itemPerPage && i < products.length;i++){
        returnedList.push(<tr>
          <td>{i}</td>
          <td><img class = "lowerBrightness" src = {products[i].BagImages[0]} alt =""></img></td>
          <td>{products[i].name}</td>
          <td>{products[i].category}</td>
          <td>{products[i].color}</td>
          <td>{products[i].stock}</td>
          <td>{products[i].price + ".00"}</td>

          <td>
            <Link to = "/editproduct" state = { {EditBag : products[i], Mode : "EDIT"} }> {/* go to edit */}
              <img class = "editButton" src = {staticFilePath + "/edit-text.png"} alt =""></img>
            </Link>
          </td>
          <td>
            <img class = "editButton" src = {staticFilePath + "/edit-text.png"} alt ="" onClick={() => {setDeleteId(products[i].bagId);setPopConfirm(true)}}></img>
          </td>
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
              <img class = "logo" src={staticFilePath + "/product.png"} alt="productmanage" />
              Product management
              </div>

              <div class = "right">
                <Link to = "/editproduct" state = { {EditBag : null, Mode : "ADD"} }>
                  <button class = "addButton">
                    add new
                  </button>
                </Link>
              </div>
              
            </section>

            <section class = "mainNav">

            <div class = "searchBar">
              <input class = "searchInput" placeholder='search' type="text" value = {searchName} onChange={(e) => setSearchName(e.target.value)}></input>
              <img class = "searchButton" src = {staticFilePath + "/search.png"} alt ="" onClick={() => handleSearchBagByName()}></img>
            </div>
            
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

            <PageNavBlock currentPage = {currentPage} numberOfPage = {totalPage} setCurrentPage = {setCurrentPage}/>

        </section>
        
        <Footer />

        {/* pop up tags it can be anywhere but let say put them here */}
        <ConfirmPopup trigger = {popConfirm} setTrigger = {setPopConfirm} callOnConfirm = {handleDeleteBag} >
        </ConfirmPopup>

        <ReportPopup trigger = {popReport} setTrigger = {setPopReport} errorCondition = {error} mode = {"DELETE"} setTriggerReload = {setHasLoad}>
        </ReportPopup>
        {/* pop up tags it can be anywhere but let say put them here */}

      </div>
    );
  }
  
  export default ProductManage;