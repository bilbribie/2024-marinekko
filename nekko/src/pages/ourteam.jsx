import React, { useState, useEffect } from 'react';
import Nav1 from './components/nav1';
import Header from './components/header';
import Footer from './components/footer';
import './style/ourteam.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function OurTeam() {
  const position = [80.457233, 95.128172]; // latitude and longitude of marinekko shop

  return (
    <div>
      <Header />
      <Nav1 />
      <h1>Our shop location</h1>
      <section className="page-container-ourteam">
        {/* Map Section */}
        <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: '400px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            Marinekko
          </Popup>
        </Marker>
      </MapContainer>

        {/* Team members section */}
        <h1>Team members</h1>
        <section class = "page-container-ourteam">
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
      </section>
      <Footer />
    </div>
  )
}

export default OurTeam;
