import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './com_style/nav1.css';
import { UsernameContext } from '../pages/login';


function Nav1() {

  const user = useContext(UsernameContext);
  

  return (
    
    <div class="nav1">

      <div class = "logoLayer">
        <div class = 'left'></div>
        <div class = 'mid'>
          <img class="logo" src={`${process.env.PUBLIC_URL}/assets/logo.png`} alt="Logo" />
        </div>
        <div class = 'right'>
          {/* this is a button */}
          <Link  to="/login">
          <img class="login" src={`${process.env.PUBLIC_URL}/assets/user.png`} alt="Login" />
          </Link> 
        </div>
      </div>


    
      <div class="bar">

        <div class = "left">

            <Link class="NoDecorate" to="/">HOME</Link> 
            <div class="seperator">|</div>
            <Link class="NoDecorate" to="/search">BAG</Link> 
            <div class="seperator">|</div>
            <Link class="NoDecorate" to="/ourteam">OUR TEAM</Link> 
        </div>

        <div class = "right">
          <div class="searchbox">
            <input class="searchtext" type="text" placeholder="Search..." />
            <button>
              <img class="searchbutton"
                src={`${process.env.PUBLIC_URL}/assets/search.png`}
                alt="Search"
                // onClick={}
              />
            </button>
          </div>
        </div>

        {/* <div>
          username is 
          {user ? (user) : (<> null</>)}
        </div> */}

      </div> 

    </div>

  );
}

export default Nav1;