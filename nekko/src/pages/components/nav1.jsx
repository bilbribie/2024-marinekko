import React from 'react';
import { Link } from 'react-router-dom';
import './com_style/nav1.css';

function Nav1() {
    return (
    
    <div class="nav1">
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
              <img className="searchbutton" src="/assets/search.png" alt="Search" />
            </button>
          </div>
        </div>
      </div> 

    </div>

  );
}

export default Nav1;