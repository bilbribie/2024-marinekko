import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Nav1() {
  const navigate = useNavigate();

  const handleSearchIconClick = (event) => {
    event.preventDefault();
    navigate('/search');
  };

  return (
    <div class="nav1">
      <img class="logo" src={`${process.env.PUBLIC_URL}/assets/logo.png`} alt="Logo" />
      <img class="login" src={`${process.env.PUBLIC_URL}/assets/user.png`} alt="Login" />
      <div class="bar">
        <div class="button">
          <Link class="Home" to="/">Home</Link> // button to go to 'Home' page
          <div class="item1">|</div>
          <Link class="Bag" to="/search">Bag</Link> // button to go to 'Bag' page
          <div class="item2">|</div>
          <Link class="Ourteam" to="/ourteam">Our Team</Link> // button to go to 'Ourteam' page
        </div>
        <div class="searchbox">
          <input class="searchtext" type="text" placeholder="Search..." />
          <button>
            <img class="searchbutton"
              src={`${process.env.PUBLIC_URL}/assets/search.png`}
              alt="Search"
              onClick={handleSearchIconClick}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Nav1;