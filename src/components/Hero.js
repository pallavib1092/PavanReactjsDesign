import React, { Component } from 'react';
import './Hero.css';


class Hero extends Component {
  render() {
    return (
      <section className="hero">
        <div className="text">
          <h1>Hi <span role="img" aria-label="wave">👋</span>,</h1>
          <h2>My name is <span className="highlight">Pavan MG</span></h2>
          <h3>I build things for web</h3>
        </div>
        <div className="profile-pic-wrapper">
          <img src={"https://static.vecteezy.com/system/resources/previews/019/900/322/non_2x/happy-young-cute-illustration-face-profile-png.png"} alt="Profile" />
        </div>
      </section>
    );
  }
}

export default Hero;
