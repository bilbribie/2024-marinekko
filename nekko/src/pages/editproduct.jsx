import React, {  useState } from 'react';
import { useLocation } from 'react-router-dom'
import Nav2 from './components/nav2';
import Header from './components/header';
import Footer from './components/footer';
import './style/editproduct.css'
import ConfirmPopup from './components/confirmpopup';
import ReportPopup from './components/reportpopup';
// import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';


const EditProduct = () => {

    const location = useLocation();
    let EditBag;
    EditBag = location.state.EditBag;
    const mode = location.state.Mode;

    // pop up control state
    const [popConfirm,setPopConfirm] = useState(false);
    const [popReport,setPopReport] = useState(false);
    const [error,setError] = useState(false);
    // state for post or put method error
    // state for showing data via popup


    const [name,setName] = useState(mode === "EDIT"?EditBag.name:'');
    const [category,setCategory] = useState(mode === "EDIT"?EditBag.category:null);
    const [color,setColor] = useState(mode === "EDIT"?EditBag.color:null);
    const [stock,setStock] = useState(mode === "EDIT"?EditBag.stock:null);
    const [price,setPrice] = useState(mode === "EDIT"?EditBag.price:null);
    const [description,setDescription] = useState(mode === "EDIT"?EditBag.description:'');
    const [pictureArray,setPictureArray] = useState(mode === "EDIT"?EditBag.BagImages:["","","",""]);
    // state for bag data


    
    //test data
    let categoriesArray = ["Tote bag","Shoulder Bag","Backpack","Handbag","Wallet"]

    //test data
    let colorsArray = ["Blue","Green","Red","Black","White","Purple","Yellow","Brown","Gray","Pink"
                        ,"Orange","Magenta","Teal"]
    const staticFilePath = "http://localhost:2999/picture";

    const HandlePostBag = (e) => {
        e.preventDefault();
        // alert(pictureArray);
        // id is 0 but in server, new id need to be allocated
        const Bag = {id : 0,name : name,category : category, color : color ,stock : stock , price : price,
            description : description , BagImages : pictureArray}
        fetch('http://localhost:2999/post_bag_api',{ method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(Bag)})
        .then(response => response.json())
        .then(data => {
            setError(data.error);
        }).then(() => {setPopReport(true)})
        .catch(error => {
        console.error('Error:', error);
        });

    }

    const HandlePutBag = (e) => {
        e.preventDefault();
        // alert(pictureArray);
        // id is 0 but in server, new id need to be allocated
        const Bag = {id : EditBag.id,name : name,category : category, color : color ,stock : stock , price : price,
            description : description , BagImages : pictureArray}
        fetch('http://localhost:2999/put_bag_api',{ method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(Bag)})
        .then(response => response.json())
        .then(data => {
            setError(data.error);
        }).then(() => {setPopReport(true)})
        .catch(error => {
        console.error('Error:', error);
        });

    }

    const HandlePictureArrayChange = (link,index) => {
        let copy = [...pictureArray];
        copy[index - 1] = link;
        setPictureArray(copy);
    }


    const pictureInputContainer = (name,index) => {
        return(
            <section class = "editor-container"> {/* product name*/}

            <div class = "side-container">
                {name}
            </div>
            <div class = "center-container">
                <input type = "text" class = "editor-box" id = "name" value = {pictureArray[index - 1]} onChange={(e) => {HandlePictureArrayChange(e.target.value,index)}}>
                </input>

                <img src = {pictureArray[index - 1] === ''?(staticFilePath + "/image-placeholder.jpg"):pictureArray[index - 1]} alt = "bagimage" onError={(e) => (e.target.src = (staticFilePath + "/icon-image-not-found.jpg"))}>
                </img>
                
     
            </div>
            <div class = "side-container"></div> 
            </section>
        );
    }


    return (<div class = "page-container-editproduct">

        <Header></Header>
        <Nav2></Nav2>
        <section class = "page-title">

            <img src = {staticFilePath + "/product.png"} alt="productedit" class = "logo"></img>
            {mode === "ADD"?"Product Management - Add Product" : "Product Management - Edit Product"} 

        </section>

        <div class = "editors-container" >

            {pictureInputContainer("main picture link:",1)}


            {pictureInputContainer("picture link 2:",2)}


            {pictureInputContainer("picture link 3:",3)}


            {pictureInputContainer("picture link 4:",4)}

            <section class = "editor-container"> {/* product name*/}

            <div class = "side-container">
                Product Name:
            </div>
            <div class = "center-container">
                <input type = "text" class = "editor-box" id = "name" value = {name} onChange={(e) => setName(e.target.value)}>
                </input>
            </div>
            <div class = "side-container"></div> 
            </section>
            

            {/* "Tote bag","Shoulder Bag","Backpack","Handbag","Wallet" */}
            <section class = "editor-container"> {/* product category*/}
                
            <div class = "side-container">
                Categories:
            </div>
            <div class = "center-container">
                <select class = "editor-box" id = "category"  value = {category} onChange={(e) => setCategory(e.target.value)}>
                    <option value = "none" selected hidden>not selected</option>

                    {categoriesArray.map((category) => {return (<option value = {category}>{category}</option>)})}
                </select>
            </div>
            <div class = "side-container"></div>
            </section>

            <section class = "editor-container"> {/* product color*/}
                
            <div class = "side-container">
                Color:
            </div>

            <div class = "center-container">
                <select class = "editor-box" id = "color" value = {color} onChange={(e) => setColor(e.target.value)}>
                    <option value = "none" selected hidden>not selected</option>

                    {colorsArray.map((color) => {return (<option value = {color}>{color}</option>)})}

                </select>
            </div>
            <div class = "side-container"></div>
            </section>


            <section class = "editor-container"> {/* product stock*/}
                
            <div class = "side-container">
                Stock:
            </div>
            <div class = "center-container">
                <input type = "text" class = "editor-box" id = "stock" value = {stock} onChange={(e) => setStock(e.target.value)}>
                </input>
            </div>
            <div class = "side-container"></div>
            </section>


            <section class = "editor-container"> {/* product price*/}
                
            <div class = "side-container">
                Price:
            </div>
            <div class = "center-container">
                <input type = "text" class = "editor-box" id  = "price" value = {price} onChange={(e) => setPrice(e.target.value)}>
                </input>
            </div>
            <div class = "side-container"></div>
            </section>


            <section class = "editor-container"> {/* product description*/}
                
            <div class = "side-container">
                Description:
            </div>
            <div class = "center-container">
                <textarea value = {description} onChange={(e) => setDescription(e.target.value)}>
                    
                </textarea>
            </div>
            <div class = "side-container" rows="4" cols="50" id  = "description"></div>
            </section>

            


    
            <button class = "confirm-button"  onClick={(e) => {setPopConfirm(true)}} >
                {mode === "ADD"?"ADD":"SAVE"}
            </button>
            
        </div>


        <Footer></Footer>

        {/* pop up tags it can be anywhere but let say put them here */}
        
        <ConfirmPopup trigger = {popConfirm} setTrigger = {setPopConfirm} callOnConfirm = {mode==="EDIT"?HandlePutBag:HandlePostBag}>
        </ConfirmPopup>

        <ReportPopup trigger = {popReport} setTrigger = {setPopReport} errorCondition = {error} mode = {mode} setTriggerReload = {null}>
        </ReportPopup>

        {/* pop up tags it can be anywhere but let say put them here */}



    </div>);


}

export default EditProduct;