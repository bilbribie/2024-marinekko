import React from 'react';
import './com_style/recommend.css';
import { Link } from 'react-router-dom';
const staticFilePath = "http://localhost:2999/picture";

function Recommend(prop){

    return (<div class = "component-container">
                <section class = "recommended-container">
                {prop.products.map((bag) => {return(
                    <Link class = "recommended-bag-container" to = "/bag" state = {bag}>
                        <img src = {bag.BagImages[0]} class = "img-container"></img>
                        <div class = "description-container">
                        <div class = "name">
                            {bag.name}
                        </div>
                        <div class = "category">
                            {bag.category}
                        </div>
                        <div class = "price">
                            {"THB " + bag.price + ".00"}
                        </div>
                        </div>
                    </Link>)})}
                </section>
            </div>);

}

export default Recommend;

