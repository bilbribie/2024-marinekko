import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Top of Page</button>
      <div>
        <h3>Bags</h3>
        <Link to="/search">Tote Bag</Link><br />
        <Link to="/search">Shoulder Bag</Link><br />
        <Link to="/search">Backpack</Link><br />
        <Link to="/search">Handbag</Link><br />
        <Link to="/search">Wallet</Link><br /> <br />
      </div> 
      <div>
        <h3>My account</h3>
        <Link to="/accountmanage">Manage Accounts</Link><br />
        <Link to="/productmanage">Manage Bags</Link><br /> <br />
      </div>
      <div>
        <h3>About Marinekko</h3>
        <Link to="/ourteam">Our Team</Link><br />
      </div>
    </footer>
  );
}

export default Footer;
