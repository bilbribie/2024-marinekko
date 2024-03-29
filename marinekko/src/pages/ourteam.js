import React from 'react';
import Nav1 from '../components/nav1';
import Header from '../components/header';
import Footer from '../components/footer';
import { Link, useNavigate } from 'react-router-dom';
import './style/ourteam.css'

function OurTeam() {
    /* // for personal profile //
    const navigate = useNavigate();
  
    const ProductClick = (event) => {
      event.preventDefault(); 
      navigate('/detail');
    };
    */
  
    return (
      <div>
        <Header />
        <Nav1 />
        <section class = "page-container-ourteam">
          <section class = "header">
            <img class = "logo" src={`${process.env.PUBLIC_URL}/assets/group-chat.png`} alt="ourteamicon" />
            ourteam
          </section>
          <section class = "members-container">
            <div class = "member-container">
              <img class = "member-picture" src={`${process.env.PUBLIC_URL}/assets/martz.png`}></img>
              <article class = "member-name">Phudis Jittiwongsamarn</article>
              <article>Phudis specialize in server-side development, he excels in constructing robust back-end infrastructures using Node.js and Python. His focus on high-performance databases and cloud services guarantees secure, efficient, and scalable digital solutions for businesses of all sizes.</article>
            </div>
            <div class = "member-container">
              <img class = "member-picture" src={`${process.env.PUBLIC_URL}/assets/nari.jpg`}></img>
              <article class = "member-name">Narita Chadha</article>
              <article>Narita is a full-stack developer with a flair for creating responsive and scalable web applications, Narita blends her extensive JavaScript expertise with a passion for agile processes. Her commitment to code excellence is evident in her diverse project portfolio and her dedication to mentoring emerging developers.</article>
            </div>
            <div class = "member-container">
              <img class = "member-picture" src={`${process.env.PUBLIC_URL}/assets/beebie.jpg`}></img>
              <article class = "member-name">Chanikarn Jongyingyos</article>
              <article>Chanikarn's front-end development is characterized by her meticulous approach to crafting user-centric designs. Leveraging her background in graphic design, she ensures every website is both aesthetically pleasing and fully accessible, adhering to the latest web standards.</article>
            </div>
          </section>
        </section>
        {/* <div class="ourteam">
            <img src={`${process.env.PUBLIC_URL}/assets/group-chat.png`} alt="ourteamicon" />
            <h1>Our team</h1>
        </div>
        <div class="members">
            <div class="Martz">
                <img src={`${process.env.PUBLIC_URL}/assets/martz.jpg`} alt="martz" />
                <h2>Phudis Jittiwongsamarn</h2>
                <h4>Phudis specialize in server-side development, he excels in constructing robust back-end infrastructures using Node.js and Python. His focus on high-performance databases and cloud services guarantees secure, efficient, and scalable digital solutions for businesses of all sizes.</h4>
            </div>
            <div class="Narita">
                <img src={`${process.env.PUBLIC_URL}/assets/nari.jpg`} alt="narita" />
                <h2>Narita Chadha</h2>
                <h4>Narita is a full-stack developer with a flair for creating responsive and scalable web applications, Narita blends her extensive JavaScript expertise with a passion for agile processes. Her commitment to code excellence is evident in her diverse project portfolio and her dedication to mentoring emerging developers.</h4>
            </div>
            <div class="Beebie">
                <img src={`${process.env.PUBLIC_URL}/assets/beebie.jpg`} alt="beebie" />
                <h2>Chanikarn Jongyingyos</h2>
                <h4>Chanikarn's front-end development is characterized by her meticulous approach to crafting user-centric designs. Leveraging her background in graphic design, she ensures every website is both aesthetically pleasing and fully accessible, adhering to the latest web standards.</h4>
            </div>
        </div> */}
        <Footer />
      </div>
    );
  }
  
  export default OurTeam;