// Footer.js
import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    const { darkMode } = this.props;

    return (
      <footer className={darkMode ? 'footer dark' : 'footer'}>
        <div className="footer-top">
          <div className="footer-left">
            <h2 className="footer-logo">{'{007}'}</h2>
            <p className="footer-name">pavanmg</p>
          </div>

          <div className="footer-center">
            <p>+91 12345 09876</p>
            <p>info@example.com</p>
          </div>

          <div className="footer-right">
            <a href="#"><i className="fab fa-github"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>

        <hr />

        <div className="footer-bottom">
          <nav>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#tech">Technologies</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
          <p className="footer-credit">
            Designed and built by <span className="author">Pavan MG</span> with <span className="love">Love & Coffee</span>
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
