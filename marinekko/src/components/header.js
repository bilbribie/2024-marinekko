import React from 'react';
import { Link } from 'react-router-dom';
import './com_style/header.css';



function Header(){

    const staticFilePath = "http://localhost:2999/picture";

    return(

        <section class = "header-component-container">
            
            <div class = 'left'></div>

            <div class = 'mid'>
                <img class="logo" src={staticFilePath + "/logo.png"} alt="Logo" />
            </div>

            <div class = 'right'>
                <Link  to="/login">
                <img class="login-button" src={staticFilePath + "/user.png"} alt="Login" />
                </Link> 
            </div>

        </section>

    );


}

export default Header;