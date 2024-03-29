import React, { useState } from 'react';
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


function Bag(){

    

    let recommendedArray = [{name : "Bag1", catagory : "Tota Bag", price : 2000, img : process.env.PUBLIC_URL + "/assets/bagSample1.jpg"},
                          {name : "Bag2", catagory : "Tota Bag", price : 2100, img : process.env.PUBLIC_URL + "/assets/bagSample2.jpg"},
                          {name : "Bag3", catagory : "Shoulder Bag", price : 2200, img : process.env.PUBLIC_URL + "/assets/bagSample1.jpg"},
                          {name : "Bag4", catagory : "Shoulder Bag", price : 6300, img : process.env.PUBLIC_URL + "/assets/bagSample2.jpg"}]


    const testBag = {BagID : 1,
        BagName : "your Favorite bag",
        BagCaragory : "Backpack",
        BagColor : ["magenta","purple"],
        BagPrice : 2999,
        BagStock : 3,
        BagDescription : "The Mono Mini Tote is made of organic cotton. The large Marimekko “M” is printed in the front. The small bag has handles and an open pocket on the outside\nSIZE\nHeight: 23.00 cm\nWidth: 31.00 cm\nDepth: 14.50 cm\nMain Material: 100 % Cotton\n",
        BagImages : [process.env.PUBLIC_URL + "/assets/bagSample1.jpg",
        process.env.PUBLIC_URL + "/assets/IMG_2023.jpg",
        process.env.PUBLIC_URL + "/assets/bagSample2.jpg",
        process.env.PUBLIC_URL + "/assets/IMG_2023.jpg"]}

    const [ imageIndex, setImageIndex ] = useState(0);

    return (
        <div>
            <Header />
            <Nav1 />
            <div class = "page-container-bag">
                
            <section class = "product-container">

                <div class = "picture-container">

                    <div class = "pictureList">
                        
                        {testBag.BagImages.map((I, idx) => 
                        {return ( idx == imageIndex ? (<img class = "picture selected" src = {I} onClick = {() => {setImageIndex(idx)}}></img>) : (<img class = "picture" src = {I} onClick = {() => {setImageIndex(idx)}}></img>)
                        );})}

                    </div>

                    <img class = "mainPicture" src = {testBag.BagImages[imageIndex]}></img>

                </div>

                <div class = "description-container">
                    <article class = "catagory-container">
                        {testBag.BagCaragory}
                    </article>
                    <article class = "name-container">
                        {testBag.BagName}
                    </article>
                    <article class = "color-container">
                        {testBag.BagColor}
                        {/* {testBag.BagColor.map((color) => {return(color + ", ")})} */}
                    </article>
                    <section class = "stock-section">
                        <div class = "stock">stock</div>
                        <article class = "stock-container">
                            {testBag.BagStock}
                        </article>
                        <div></div>
                    </section>

                    <hr class = "horizontal-seperator-description"></hr>

                    <article class = "info">Info</article>

                    {testBag.BagDescription.split("\n").map(
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