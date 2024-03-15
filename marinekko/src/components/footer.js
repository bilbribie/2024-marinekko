import React from 'react';
import { Link } from 'react-router-dom';
import './com_style/footer.css';
import "bootstrap/dist/css/bootstrap.min.css"

function Footer() {
  return (
    <footer>
      <button class = "toTopButton" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Top of Page ^</button>
      
      
      <section class = "footerNav">

          <section class = "container">
            <article>Bags</article>
            <div class = "link">
              <Link class = "noDecoration" to="/search">Tote Bag</Link><br />
              <Link class = "noDecoration" to="/search">Shoulder Bag</Link><br />
              <Link class = "noDecoration" to="/search">Backpack</Link><br />
              <Link class = "noDecoration" to="/search">Handbag</Link><br />
              <Link class = "noDecoration" to="/search">Wallet</Link><br /> <br />
            </div>
          </section>

          <div class = "verticalSeperator">
            <div class="vr"></div>
          </div>
          
          <section class = "container">
            <article>My account</article>
            <div class = "link">
              <Link class = "noDecoration" to="/accountmanage">Manage Accounts</Link><br />
              <Link class = "noDecoration" to="/productmanage">Manage Bags</Link><br /> <br />
            </div>
          </section>

          <div class = "verticalSeperator">
            <div class="vr"></div>
          </div>

          <section class = "container">
            <article>About Marinekko</article>
            <div class = "link">
              <Link class = "noDecoration" to="/ourteam">Our Team</Link><br />
            </div>
          </section>

      </section>

      <section class = "bottom">
        @ 2024 MARINEKKO CO.LTD
      </section>


    </footer>
  );
}

export default Footer;
