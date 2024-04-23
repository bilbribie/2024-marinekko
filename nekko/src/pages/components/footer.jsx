import React from 'react';
import { Link } from 'react-router-dom';
import './com_style/footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <button className="toTopButton" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Top of Page ^
        </button>
      </div>
      <div className="footer-body">
        <div className="footer-column">
          <h3>Bag</h3>
          <Link class="noDecoration" to="/search" state={"Tote bag"}>Tote Bag</Link>
          <Link class="noDecoration" to="/search" state={"Shoulder Bag"}>Shoulder Bag</Link>
          <Link class="noDecoration" to="/search" state={"Backpack"}>Backpack</Link>
          <Link class="noDecoration" to="/search" state={"Handbag"}>Handbag</Link>
          <Link class="noDecoration" to="/search" state={"Wallet"}>Wallet</Link>
        </div>
        <div className="footer-column">
          <h3>My Account</h3>
          <Link class="noDecoration" to={localStorage.getItem("isLoggedIn") ? "/accountmanage" : "/login"}>Manage Accounts</Link>
          <Link class="noDecoration" to={localStorage.getItem("isLoggedIn") ? "/productmanage" : "/login"}>Manage Bags</Link>
        </div>
        <div className="footer-column">
          <h3>About Marinekko</h3>
          <Link to="/ourteam">Our Team</Link>
        </div>
      </div>
      <div className="footer-bottom">
        © 2024 MARINEKKO CO., LTD
      </div>
    </footer>
  );
}

export default Footer;
