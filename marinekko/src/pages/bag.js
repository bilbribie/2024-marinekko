import React, {  useState } from 'react';
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
//     `stock` int(100) NOT NULL,
//     `description` varchar(500) NOT NULL,
//     PRIMARY KEY (`BagID`)
//     );

function Bag(){

    const staticFilePath = "http://localhost:2999/picture";
    const [ imageIndex, setImageIndex ] = useState(0);

    const BI = ["https://www.lynaccs.com/media/catalog/product/l/l/ll24cbs165_wht600_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1123&width=795&canvas=795:1123.jpg",
"https://www.lynaround.com/media/catalog/product/a/2/a24c2wg011_beg000_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1123&width=795&canvas=795:1123.jpg",
"https://www.lynaround.com/media/catalog/product/a/2/a24c6wg001_red000_1_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1123&width=795&canvas=795:1123.jpg",
"https://www.lynaccs.com/media/catalog/product/l/l/ll23fbf180_blk000_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1123&width=795&canvas=795:1123.jpg"]
    const desp = "The Mono Mini Tote is made of organic cotton. The large Marimekko “M” is printed in the front. The small bag has handles and an open pocket on the outside\nSIZE\nHeight: 23.00 cm\nWidth: 31.00 cm\nDepth: 14.50 cm\nMain Material: 100 % Cotton\n";
    let recommendedArray = [{bagId : 1,name : "Bag1", category : "Tota Bag", stock : 3, price : 2000, color : "Red" ,BagImages : BI,description : desp},
                            {bagId : 2,name : "Bag2", category : "Tota Bag", stock : 30, price : 2100, color : "Blue" ,BagImages : BI,description : desp},
                            {bagId : 3,name : "Bag3", category : "Shoulder Bag", stock : 1, price : 2200, color : "Yellow" ,BagImages : BI,description : desp},
                            {bagId : 4,name : "Bag4", category : "Shoulder Bag", stock : 5, price : 6300, color : "Red" ,BagImages : BI,description : desp}]


    // const shownBag = {bagId : 1,
    //     name : "your Favorite bag",
    //     category : "Backpack",
    //     color : ["magenta","purple"],
    //     Price : 2999,
    //     stock : 3,
    //     description : "The Mono Mini Tote is made of organic cotton. The large Marimekko “M” is printed in the front. The small bag has handles and an open pocket on the outside\nSIZE\nHeight: 23.00 cm\nWidth: 31.00 cm\nDepth: 14.50 cm\nMain Material: 100 % Cotton\n",
    //     BagImages : ["/bagSample1.jpg","/IMG_2023.jpg","/bagSample2.jpg","/IMG_2023.jpg"]}
    
    const location = useLocation();
    let shownBag;
    shownBag = location.state;

    return (
        <div>
            <Header />
            <Nav1 />
            <div class = "page-container-bag">
                
            <section class = "product-container">

                <div class = "picture-container">

                    <div class = "pictureList">
                        
                        {shownBag.BagImages.map((I, idx) => 
                        {return ( idx === imageIndex ? (<img class = "picture selected" src = {I} onClick = {() => {setImageIndex(idx)}} alt =""></img>) : (<img class = "picture" src = {I} onClick = {() => {setImageIndex(idx)}} alt =""></img>)
                        );})}

                    </div>

                    <img class = "mainPicture" src = {shownBag.BagImages[imageIndex]} alt =""></img>

                </div>

                <div class = "description-container">
                    <article class = "category-container">
                        {shownBag.category}
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
                            {shownBag.stock}
                        </article>
                        <div></div>
                    </section>

                    <hr class = "horizontal-seperator-description"></hr>

                    <article class = "info">Info</article>

                    {shownBag.description.split("\n").map(
                        (text) => {return (<article>{text}</article>)}
                    )}
                    
                </div>

            </section>

            <hr class = "horizontal-seperator-pink"></hr>
            <section class = "recommend-text">
                You might also like
            </section>

            </div>

            <Recommend products = {recommendedArray}></Recommend>
            <Footer></Footer>
        </div>
    );

}

export default Bag;