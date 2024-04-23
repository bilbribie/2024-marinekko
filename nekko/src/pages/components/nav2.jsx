import React from 'react';
import { Link } from 'react-router-dom';
import './com_style/nav2.css';


function Nav2() {
    return (
    <div class="nav2">

      <Link class="NoDecorate" to="/">HOME</Link> 
      <div class="seperator">|</div>
      <Link class="NoDecorate" state = {""} to="/search">BAG</Link> 
      {/* <Link class="NoDecorate" to={"/bag/" + JSON.stringify(nameObj)} >BAG</Link>  */}
      <div class="seperator">|</div>
      <Link class="NoDecorate" to="/ourteam">OUR TEAM</Link> 
        
    </div>

  );
}

export default Nav2;