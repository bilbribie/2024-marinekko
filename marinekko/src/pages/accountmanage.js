import React, { useState , useEffect } from 'react';
import Header from '../components/header';
import Nav2 from '../components/nav2';
import Footer from '../components/footer';
import { Link } from 'react-router-dom';
import './style/accountmanage.css'
import PageNavBlock from '../components/pagenavblock';
import ConfirmPopup from '../components/confirmpopup';
import ReportPopup from '../components/reportpopup';

function AccountManage() {
    
    const itemPerPage = 10;
    const [totalPage,setTotalPage] = useState(1);
    const [currentPage,setCurrentPage] = useState(1);
    const [admins,setAdmins] = useState([]);

    const [hasLoad,setHasLoad] = useState(true);
    const [reload,setReload] = useState(true);
    const [searchId,setSearchId] = useState('');


    // pop up control state
    const [popConfirm,setPopConfirm] = useState(false);
    const [popReport,setPopReport] = useState(false);
    const [error,setError] = useState(false);
    const [deleteId,setDeleteId] = useState(0);
    // state for delete method error
    // state for showing data via popup


    useEffect(() => {
      
      fetch('http://localhost:2999/alladmin_api') 
      .then(response => response.json())
      .then(data => {setAdmins(data);setTotalPage(Math.floor(data.length/itemPerPage) + 1);setCurrentPage(1);})
      .then(setReload(!reload))
      .catch(error => console.error('Error fetching admin:', error));

    }, [hasLoad]);


    useEffect(() => { // reload the page without triggering reset???
      setReload(!reload);
    },[reload]);


    const handleSearchAdminById = () => {
      let url;
      url = `http://localhost:2999searchAdminId_api/?id=${searchId}`;

      fetch(url)
      .then(res => res.json())
      .then(data => {setAdmins(data); 
        setTotalPage(Math.floor(data.length/itemPerPage) + 1);
        setCurrentPage(1)})
      .then(setReload(!reload));
  
    }

    const handleDeleteAdmin= () => {

      fetch('http://localhost:2999/delete_api_admin', 
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


    function renderAdminRow(){
      const returnedList = [];
      for(let i = (currentPage - 1) * itemPerPage;i < currentPage * itemPerPage && i < admins.length;i++){
        returnedList.push(<tr>
          <td>{admins[i].AdminUsername}</td>
          <td>{admins[i].AdminFirstName}</td>
          <td>{admins[i].AdminEmail}</td>
          
          <td>
            <Link to = "/editadmin" state = { {EditAdmin : admins[i], Mode : "EDIT"} } >
              <img class = "editButton" src = {process.env.PUBLIC_URL + "/assets/edit-text.png"}></img>
            </Link>
          </td>
          <td>
            <img class = "editButton" src = {process.env.PUBLIC_URL + "/assets/edit-text.png"} onClick={() => {setDeleteId(admins[i].AdminID);setPopConfirm(true)}}></img>
          </td>
        </tr>);
      }
     
      return returnedList;
    }
                  
    return (
      <div>
        <Header/>
        <Nav2 />
        <section class = "page-container-accountmanagement">

          <section class = "nav">

            <div class = "left">
            <img class = "logo" src={process.env.PUBLIC_URL + "/assets/system.png"} alt="productmanage" />
            account management
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
              <input class = "searchInput" placeholder='search' type="text" value = {searchId} onChange={(e) => setSearchId(e.target.value)}></input>
              <img class = "searchButton" src = {process.env.PUBLIC_URL + "/assets/search.png"} onClick={() => handleSearchAdminById()}></img>
            </div>
            
          </section>

          <section class = "edit-table-container">

            <table class = "edit-table">

              <thead>
              <tr>
                
                <th>username:</th>
                <th>firstname:</th>
                <th>email</th>
                <th>A</th>
                <th>D</th>
  
              </tr>
              </thead>

              <tbody>
              {/* <tr>
                
                <td>username:</td>
                <td>firstname:</td>
                <td>email</td>
                <td>A</td>
                <td>D</td>
  
              </tr> */}

                  {renderAdminRow()}

              </tbody>
              
              
            </table>

          </section>
          {<PageNavBlock currentPage = {currentPage} numberOfPage = {totalPage} setCurrentPage = {setCurrentPage}/>}
        </section>
        <Footer />

        {/* pop up tags it can be anywhere but let say put them here */}
        <ConfirmPopup trigger = {popConfirm} setTrigger = {setPopConfirm} callOnConfirm = {handleDeleteAdmin} >
        </ConfirmPopup>

        <ReportPopup trigger = {popReport} setTrigger = {setPopReport} errorCondition = {error} mode = {"DELETE"} setTriggerReload = {setHasLoad}>
        </ReportPopup>
        {/* pop up tags it can be anywhere but let say put them here */}
      </div>
    );
  }
  
  export default AccountManage;