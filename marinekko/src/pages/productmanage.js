import React, { useState } from 'react';
import Header from '../components/header';
import Nav2 from '../components/nav2';
import Footer from '../components/footer';
import './style/productmanage.css'
import PageNavBlock from '../components/pagenavblock';
import { Link } from 'react-router-dom';


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

    const BI = ["https://www.lynaround.com/media/catalog/product/a/2/a24c2wg011_beg000_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1123&width=795&canvas=795:1123.jpg",
    "https://www.lynaround.com/media/catalog/product/a/2/a24c6wg007_blu000_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1123&width=795&canvas=795:1123.jpg",
    "https://www.lynaccs.com/media/catalog/product/l/l/ll23fbf180_blk000_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1123&width=795&canvas=795:1123.jpg",
    "https://www.lynaround.com/media/catalog/product/a/2/a24c2wg011_beg000_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1123&width=795&canvas=795:1123.jpg"]
    const desp = "The Mono Mini Tote is made of organic cotton. The large Marimekko “M” is printed in the front. The small bag has handles and an open pocket on the outside\nSIZE\nHeight: 23.00 cm\nWidth: 31.00 cm\nDepth: 14.50 cm\nMain Material: 100 % Cotton\n";
    const staticFilePath = "http://localhost:2999/picture";
    // const testBag = {id : 1,
    //   BagName : "your Favorite bag",
    //   Bagcategory : "Backpack",
    //   BagColor : ["magenta","purple"],
    //   BagPrice : 2999,
    //   stock : 3,
    //   description : "The Mono Mini Tote is made of organic cotton. The large Marimekko “M” is printed in the front. The small bag has handles and an open pocket on the outside\nSIZE\nHeight: 23.00 cm\nWidth: 31.00 cm\nDepth: 14.50 cm\nMain Material: 100 % Cotton\n",
    //   BagImages : [process.env.PUBLIC_URL + "/assets/bagSample1.jpg",
    //   process.env.PUBLIC_URL + "/assets/IMG_2023.jpg",
    //   process.env.PUBLIC_URL + "/assets/bagSample2.jpg",
    //   process.env.PUBLIC_URL + "/assets/IMG_2023.jpg"]}

      let bagsArray = [{id : 1,name : "Bag1", category : "Tota Bag", stock : 3, price : 2000, color : "Red" ,img : "/bagSample1.jpg",BagImages : BI,description : desp},
      {id : 2,name : "Bag2", category : "Tota Bag", stock : 30, price : 2100, color : "Blue" , img : "/bagSample2.jpg",BagImages : BI,description : desp},
      {id : 3,name : "Bag3", category : "Shoulder Bag", stock : 1, price : 2200, color : "Yellow" , img : "/bagSample1.jpg",BagImages : BI,description : desp},
      {id : 4,name : "Bag4", category : "Shoulder Bag", stock : 5, price : 6300, color : "Red" , img : "/bagSample2.jpg",BagImages : BI,description : desp},
      {id : 5,name : "Bag5", category : "Tota Bag", stock : 30, price : 2000,color : "Purple" , img : "/bagSample1.jpg",BagImages : BI,description : desp},
      {id : 6,name : "Bag6", category : "Tota Bag", stock : 10, price : 2100, color : "Red" , img : "/bagSample2.jpg",BagImages : BI,description : desp},
      {id : 7,name : "Bag7", category : "Shoulder Bag", stock : 67, price : 2200,color : "Pink" , img : "/bagSample1.jpg",BagImages : BI,description : desp},
      {id : 8,name : "Bag8", category : "Shoulder Bag", stock : 45, price : 6300, color : "Red" , img : "/bagSample2.jpg",BagImages : BI,description : desp},
      {id : 9,name : "Bag9", category : "Tota Bag", stock : 5, price : 2000,color : "Purple" , img : "/bagSample1.jpg",BagImages : BI,description : desp},
      {id : 10,name : "Bag10", category : "Tota Bag", stock : 23, price : 2100,color : "Purple" , img : "/bagSample2.jpg",BagImages : BI,description : desp},
      {id : 11,name : "Bag11", category : "Tota Bag", stock : 6534, price : 2100,color : "Pink" , img : "/bagSample2.jpg",BagImages : BI,description : desp},
      {id : 12,name : "Bag12", category : "Shoulder Bag", stock : 234, price : 2200,color : "Orange" , img : "/bagSample1.jpg",BagImages : BI,description : desp},
      {id : 13,name : "Bag13", category : "Shoulder Bag", stock : 213, price : 6300,color : "Orange" , img : "/bagSample2.jpg",BagImages : BI,description : desp},
      {id : 14,name : "Bag14", category : "Tota Bag", stock : 10, price : 2000,color : "Green" , img : "/bagSample1.jpg",BagImages : BI,description : desp},
      {id : 15,name : "Bag15", category : "Tota Bag", stock : 355, price : 2100,color : "Pink" , img : "/bagSample2.jpg",BagImages : BI,description : desp},
      {id : 16,name : "Bag16", category : "Shoulder Bag", stock : 4, price : 2200, color : "Red" , img : "/bagSample1.jpg",BagImages : BI,description : desp},
      {id : 17,name : "Bag17", category : "Shoulder Bag", stock : 43, price : 6300, color : "Red" , img : "/bagSample2.jpg",BagImages : BI,description : desp},
      {id : 18,name : "Bag18", category : "Tota Bag", stock : 63, price : 2000,color : "Orange" , img : "/bagSample1.jpg",BagImages : BI,description : desp},
      {id : 19,name : "Bag19", category : "Tota Bag", stock : 24, price : 2100,color : "Green" , img : "/bagSample2.jpg",BagImages : BI,description : desp}]

    const [totalProduct,setTotalProduct] = useState(bagsArray.length);
    const itemPerPage = 10;
    const [totalPage,setTotalPage] = useState(Math.floor(totalProduct/itemPerPage) + 1);
    const [currentPage,setCurrentPage] = useState(1);


    function renderBagsRow(){
      const returnedList = [];
      for(let i = (currentPage - 1) * itemPerPage;i < currentPage * itemPerPage && i < bagsArray.length;i++){
        returnedList.push(<tr>
          <td>{i}</td>
          <td><img class = "lowerBrightness" src = {bagsArray[i].BagImages[0]} alt =""></img></td>
          <td>{bagsArray[i].name}</td>
          <td>{bagsArray[i].category}</td>
          <td>{bagsArray[i].color}</td>
          <td>{bagsArray[i].stock}</td>
          <td>{bagsArray[i].price + ".00"}</td>

          <td>
            <Link to = "/editproduct" state = { {EditBag : bagsArray[i], Mode : "ADD"} }> {/* go to edit */}
              <img class = "editButton" src = {staticFilePath + "/edit-text.png"} alt =""></img>
            </Link>
          </td>
          <td>
            <Link to = "/editproduct" state = { {EditBag : bagsArray[i], Mode : "EDIT"} }>
              <img class = "editButton" src = {staticFilePath + "/edit-text.png"} alt =""></img>
            </Link>
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
                <button class = "addButton">
                  add new
                </button>
              </div>
              
            </section>

            <section class = "mainNav">

              <div class = "container flex-start">
                  <div class = "searchBar">
                    <input class = "searchInput" placeholder='search' type="text"></input>
                    <img class = "searchButton" src = {staticFilePath + "/search.png"} alt =""></img>
                  </div>
              </div>
              <div class = "container center">
                  <div class = "categoryButton">
                    <img class = "searchButton" src = {staticFilePath + "/down-arrow.png"} alt =""></img>
                    category
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

            <PageNavBlock currentPage = {currentPage} numberOfPage = {totalPage} setCurrentPage = {setCurrentPage}/>

        </section>
        


        <Footer />
      </div>
    );
  }
  
  export default ProductManage;