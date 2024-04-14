import React from 'react';
import Nav1 from './components/nav1';
import Header from './components/header';
import Footer from './components/footer';
import './style/ourteam.css';

function OurTeam() {

  return (
    <div>
        <Header />
        <Nav1 />
        <section class = "page-container-ourteam">
          <section class = "header">
            <img class = "logo" src={"./assets/group-chat.png"} alt="ourteamicon" />
            ourteam
          </section>
          <section class = "members-container">
            <div class = "member-container">
              <img class = "member-picture" src={"./assets/martz.png"} alt="ourteammember" />
              <article class = "member-name">Phudis Jittiwongsamarn</article>
              <article>Phudis specialize in server-side development, he excels in constructing robust back-end infrastructures using Node.js and Python. His focus on high-performance databases and cloud services guarantees secure, efficient, and scalable digital solutions for businesses of all sizes.</article>
            </div>
            <div class = "member-container">
              <img class = "member-picture" src={"./assets/nari.jpg"} alt="ourteammember" />
              <article class = "member-name">Narita Chadha</article>
              <article>Narita is a full-stack developer with a flair for creating responsive and scalable web applications, Narita blends her extensive JavaScript expertise with a passion for agile processes. Her commitment to code excellence is evident in her diverse project portfolio and her dedication to mentoring emerging developers.</article>
            </div>
            <div class= "member-container">
              <img class = "member-picture" src={"./assets/beebie.JPG"} alt="ourteammember" />
              <article class = "member-name">Chanikarn Jongyingyos</article>
              <article>Chanikarn's front-end development is characterized by her meticulous approach to crafting user-centric designs. Leveraging her background in graphic design, she ensures every website is both aesthetically pleasing and fully accessible, adhering to the latest web standards.</article>
            </div>
          </section>
        </section>

        <Footer />
      </div>
  )
}

export default OurTeam;