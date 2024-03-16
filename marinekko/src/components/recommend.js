import React from 'react';
import './style/recommend.css';

function Recommend(prop){

    

    return (<div class = "component-container">
                <section class = "recommended-container">
                {prop.bagsArray.map((bag) => {return(
                    <div class = "recommended-bag-container">
                        <img src = {bag.img} class = "img-container"></img>
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
                    </div>)})}
                </section>
            </div>);

}

export default Recommend;

