import React from 'react';
import { Link } from 'react-router-dom';
import './com_style/footer.css';
import "bootstrap/dist/css/bootstrap.min.css"


function Footer() {

  // const navigate = useNavigate();
  // const data = { email: "John", pass: 303 };

  // const ROUTE = () => {
  //   navigate("/login",{state : data});
  // }

  // localStorage.setItem('isLoggedIn', 'true');
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
              <Link class = "noDecoration" to={localStorage.getItem("isLoggedIn")?"/accountmanage":"/login"}>Manage Accounts</Link><br />
              <Link class = "noDecoration" to={localStorage.getItem("isLoggedIn")?"/productmanage":"/login"}>Manage Bags</Link><br /> <br />
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
