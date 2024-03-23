import React, { useState } from 'react';
import Header from '../components/header';
import Nav2 from '../components/nav2';
import Footer from '../components/footer';
// import { Link } from 'react-router-dom';
import './style/accountmanage.css'
import PageNavBlock from '../components/pagenavblock';

function AccountManage() {
    /*
    const navigate = useNavigate();
  
    const ProductClick = (event) => {
      event.preventDefault(); 
      navigate('/detail');
    };
    */

    const adminsArray = [{userName : "mart1az",email : "marz@gmail",firstName : "marz"}
                        ,{userName : "james303",email : "james@gmail",firstName : "james"}
                      ,{userName : "heisenberg",email : "walterwhite@gmail",firstName : "walter"}
                      ,{userName : "mike",email : "kime@gmail",firstName : "mike"}
                      ,{userName : "mart1az",email : "marz@gmail",firstName : "marz"}
                      ,{userName : "mart1az",email : "marz@gmail",firstName : "marz"}
                      ,{userName : "mart1az",email : "marz@gmail",firstName : "marz"}
                      ,{userName : "mart1az",email : "marz@gmail",firstName : "marz"}
                      ,{userName : "mart1az",email : "marz@gmail",firstName : "marz"}];
    
    
    const [totalAdmin,setTotalAdmin] = useState(adminsArray.length);
    const itemPerPage = 5;
    const [totalPage,setTotalPage] = useState(Math.floor(totalAdmin/itemPerPage) + 1);
    const [currentPage,setCurrentPage] = useState(1);

    function renderAdminRow(){
      const returnedList = [];
      for(let i = (currentPage - 1) * itemPerPage;i < currentPage * itemPerPage && i < adminsArray.length;i++){
        returnedList.push(<tr>
          <td>{adminsArray[i].userName}</td>
          <td>{adminsArray[i].firstName}</td>
          <td>{adminsArray[i].email}</td>
          <td><img class = "editButton" src = {process.env.PUBLIC_URL + "/assets/edit-text.png"}></img></td>
          <td><img class = "editButton" src = {process.env.PUBLIC_URL + "/assets/edit-text.png"}></img></td>
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
              <button class = "addButton">
                add new
              </button>
            </div>
              
          </section>

          <section class = "mainNav">

            <div class = "searchBar">
              <input class = "searchInput" placeholder='search' type="text"></input>
              <img class = "searchButton" src = {process.env.PUBLIC_URL + "/assets/search.png"}></img>
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
      </div>
    );
  }
  
  export default AccountManage;