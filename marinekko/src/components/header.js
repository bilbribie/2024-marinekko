import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import './com_style/header.css';



function Header(){


    return(

        <section class = "header-container">
            
            <div class = 'left'></div>

            <div class = 'mid'>
                <img class="logo" src={`${process.env.PUBLIC_URL}/assets/logo.png`} alt="Logo" />
            </div>

            <div class = 'right'>
                <Link  to="/login">
                <img class="login-button" src={`${process.env.PUBLIC_URL}/assets/user.png`} alt="Login" />
                </Link> 
            </div>

        </section>

    );


}

export default Header;