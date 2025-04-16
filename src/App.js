import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
// import About from './components/About';
// import Projects from './components/Projects';
// import Contact from './components/Contact';
// import Skills from './components/Skills';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      darkMode: false
    };
  }

  toggleDarkMode = () => {
    this.setState(prevState => ({
      darkMode: !prevState.darkMode
    }));
  }

  render() {
    const { darkMode } = this.state;

    return (
      <div className={darkMode ? 'app dark' : 'app'}>
        <Navbar darkMode={darkMode} toggleDarkMode={this.toggleDarkMode} />
       <Hero /> 
       {/*   <About />
        <Projects />
        <Skills />
        <Contact /> */}
      </div>
    );
  }
}

export default App;
