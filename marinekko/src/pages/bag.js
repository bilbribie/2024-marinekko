import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'
import Nav1 from '../components/nav1';
import Header from '../components/header';
import Footer from '../components/footer';
import Recommend from '../components/recommend';
import './style/bag.css'

// CREATE TABLE Bag (
//     `BagID` int(10) NOT NULL,
//     `BagName` varchar(100) NOT NULL,
//     `BagCategory` varchar(20) NOT NULL,
//     `BagColor` varchar(20) NOT NULL,
//     `BagPrice` decimal(10,2) NOT NULL,
//     `BagStock` int(100) NOT NULL,
//     `BagDescription` varchar(500) NOT NULL,
//     PRIMARY KEY (`BagID`)
//     );

let shownBag;
function Bag(props){

    const staticFilePath = "http://localhost:2999/picture";
    const [ imageIndex, setImageIndex ] = useState(0);

    const BI = ["/bagSample1.jpg","/IMG_2023.jpg","/bagSample2.jpg","/IMG_2023.jpg"]
    const desp = "The Mono Mini Tote is made of organic cotton. The large Marimekko “M” is printed in the front. The small bag has handles and an open pocket on the outside\nSIZE\nHeight: 23.00 cm\nWidth: 31.00 cm\nDepth: 14.50 cm\nMain Material: 100 % Cotton\n";
    let recommendedArray = [{bagId : 1,name : "Bag1", catagory : "Tota Bag", BagStock : 3, price : 2000, color : "Red" ,img : "/bagSample1.jpg",BagImages : BI,BagDescription : desp},
                            {bagId : 2,name : "Bag2", catagory : "Tota Bag", BagStock : 30, price : 2100, color : "Blue" , img : "/bagSample2.jpg",BagImages : BI,BagDescription : desp},
                            {bagId : 3,name : "Bag3", catagory : "Shoulder Bag", BagStock : 1, price : 2200, color : "Yellow" , img : "/bagSample1.jpg",BagImages : BI,BagDescription : desp},
                            {bagId : 4,name : "Bag4", catagory : "Shoulder Bag", BagStock : 5, price : 6300, color : "Red" , img : "/bagSample2.jpg",BagImages : BI,BagDescription : desp}]


    // const shownBag = {bagId : 1,
    //     name : "your Favorite bag",
    //     Catagory : "Backpack",
    //     color : ["magenta","purple"],
    //     Price : 2999,
    //     BagStock : 3,
    //     BagDescription : "The Mono Mini Tote is made of organic cotton. The large Marimekko “M” is printed in the front. The small bag has handles and an open pocket on the outside\nSIZE\nHeight: 23.00 cm\nWidth: 31.00 cm\nDepth: 14.50 cm\nMain Material: 100 % Cotton\n",
    //     BagImages : ["/bagSample1.jpg","/IMG_2023.jpg","/bagSample2.jpg","/IMG_2023.jpg"]}
    
    const location = useLocation();
    shownBag = location.state;
    // shownBag = state;

    // if(!shownBag){
    //     return <div>no data</div>;
    // }else{
    //     return <div>have data</div>
    // }

    return (
        <div>
            <Header />
            <Nav1 />
            <div class = "page-container-bag">
                
            <section class = "product-container">

                <div class = "picture-container">

                    <div class = "pictureList">
                        
                        {shownBag.BagImages.map((I, idx) => 
                        {return ( idx == imageIndex ? (<img class = "picture selected" src = {staticFilePath + I} onClick = {() => {setImageIndex(idx)}}></img>) : (<img class = "picture" src = {staticFilePath + I} onClick = {() => {setImageIndex(idx)}}></img>)
                        );})}

                    </div>

                    <img class = "mainPicture" src = {staticFilePath + shownBag.BagImages[imageIndex]}></img>

                </div>

                <div class = "description-container">
                    <article class = "catagory-container">
                        {shownBag.catagory}
                    </article>
                    <article class = "name-container">
                        {shownBag.name}
                    </article>
                    <article class = "color-container">
                        {shownBag.color}
                        {/* {shownBag.BagColor.map((color) => {return(color + ", ")})} */}
                    </article>
                    <section class = "stock-section">
                        <div class = "stock">stock</div>
                        <article class = "stock-container">
                            {shownBag.BagStock}
                        </article>
                        <div></div>
                    </section>

                    <hr class = "horizontal-seperator-description"></hr>

                    <article class = "info">Info</article>

                    {shownBag.BagDescription.split("\n").map(
                        (text) => {return (<article>{text}</article>)}
                    )}
                    
                </div>

            </section>

            <hr class = "horizontal-seperator-pink"></hr>
            <section class = "recommend-text">
                You might also like
            </section>

            </div>

            <Recommend bagsArray = {recommendedArray}></Recommend>
            <Footer></Footer>
        </div>
    );

}

export default Bag;