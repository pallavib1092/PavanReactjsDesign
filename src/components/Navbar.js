import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="logo">
          <span className="logo-curly">{'{007}'}</span>
          <span className="logo-text">pavanmg</span>
        </div>

        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#tech">Tech Stack</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="icons">
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <button className="theme-toggle" onClick={this.props.toggleDarkMode}>
            {this.props.darkMode ? '🌙' : '☀️'}
          </button>
        </div>
      </nav>
    );
  }
}

export default Navbar;
