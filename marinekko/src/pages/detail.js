import React from 'react';
import Nav1 from '../components/nav1';
import Footer from '../components/footer';
import { Link, useNavigate } from 'react-router-dom';

function Detail() {
    const navigate = useNavigate();

    const ProductClick = (event) => {
        event.preventDefault();
        navigate('/detail');
    };
    return (
        <div>
            <Nav1 />
            <div className="bag_deatails">
                <h4>Tote bag</h4>
                <h1>Mushroomy</h1>
                <h2>Pink,Purple</h2>
                <h3>Stock:</h3>
                <h3>25</h3>
                <h5>-----------------------------</h5>
                <h4>INFO</h4>
                <h5>InfoInfoInfoInfoInfoInfoInfoInfoInfoInfoInfoInfoInfoInfoInfoInfoInfoInfoInfoInfoInfoInfoInfoInfo</h5>
            </div>
            <h5>----------------------------------------------------------</h5>
            <h1>You my also like:</h1>
            <div className="product1" onClick={ProductClick}>
                <img src={`${process.env.PUBLIC_URL}/assets/IMG_2023.jpg`} alt="product1" />
                <h3>Mushroomy</h3>
                <h4>Market bag</h4>
                <h2>THB 2,890.00</h2>
            </div>
            <div className="product2" onClick={ProductClick}>
                <img src={`${process.env.PUBLIC_URL}/assets/IMG_2023.jpg`} alt="product2" />
                <h3>Mushroomy</h3>
                <h4>Market bag</h4>
                <h2>THB 2,890.00</h2>
            </div>
            <div className="product3" onClick={ProductClick}>
                <img src={`${process.env.PUBLIC_URL}/assets/IMG_2023.jpg`} alt="product3" />
                <h3>Mushroomy</h3>
                <h4>Market bag</h4>
                <h2>THB 2,890.00</h2>
            </div>
            <div className="product4" onClick={ProductClick}>
                <img src={`${process.env.PUBLIC_URL}/assets/IMG_2023.jpg`} alt="product4" />
                <h3>Mushroomy</h3>
                <h4>Market bag</h4>
                <h2>THB 2,890.00</h2>
            </div>
            <Footer />
        </div>
    );
}

export default Detail;