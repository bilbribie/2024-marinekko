import React from 'react';
import './com_style/recommend.css';
import { Link } from 'react-router-dom';

function Recommend(prop){

    return (<div class = "component-container">
                <section class = "recommended-container">
                {prop.bagsArray.map((bag) => {return(
                    <Link class = "recommended-bag-container" to = "/bag" state = {bag}>
                        {/* <img src = {staticFilePath + bag.img} class = "img-container"></img> */}
                        <div class = "description-container">
                        <div class = "name">
                            {bag.name}
                        </div>
                        <div class = "catagory">
                            {bag.catagory}
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

