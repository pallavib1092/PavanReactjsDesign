// import React from 'react';

// import './TechStack.css';

// const techIcons = [
//   { name: 'HTML5', src: './icons/html5.jpg'},
//   { name: 'CSS3', src:'./icons/css3.jpg' },
//   { name: 'JavaScript', src: '/icons/javascript.png' },
//   { name: 'React', src: './icons/logo192.png' },
//   { name: 'Redux', src: '/icons/redux.png' },
//   { name: 'Bootstrap', src: '/icons/bootstrap.jpg' },
//   { name: 'Tailwind', src: '/icons/tailwind.png' },
//   { name: 'Sass', src: '/icons/saas.png' },
//   { name: 'Git', src: '/icons/github.png' },
//   { name: 'VS Code', src: '/icons/vscode.jpg' },
//   { name: 'GitHub', src: '/icons/github.png' },
// ];

// const TechStack = () => {
//   return (
//     <section className="tech-section">
//       <h2>My Tech Stack</h2>
//       <p>Technologies I’ve been working with recently</p>
//       <div className="tech-grid">
//         {techIcons.map(icon => (
//           <div className="tech-item" key={icon.name}>
//             <img  src={icon.src} alt={icon.name} title={icon.name} />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default TechStack;


import React, { Component } from 'react';
import './TechStack.css';

class TechStack extends Component {
  render() {
    const techIcons = [
      { name: 'HTML5', src: '/icons/html5.png' },
      { name: 'CSS3', src: '/icons/css3.png' },
      { name: 'JavaScript', src: '/icons/javascript.png' },
      { name: 'React', src: '/icons/logo192.png' },
      { name: 'Redux', src: '/icons/redux.png' },
      { name: 'Bootstrap', src: '/icons/bootstarp.png' },
      { name: 'Tailwind', src: '/icons/tailwind.png' },
      { name: 'Sass', src: '/icons/saas.png' },
      { name: 'Git', src: '/icons/github.png' },
      { name: 'Superhero', src: '/icons/hero.png' },
      { name: 'VS Code', src: '/icons/vscode1.png' },
      { name: 'GitHub', src: '/icons/github.png' },
    ];

    return (
      <section className="tech-section" id="tech">
        <h2 className="section-title">My Tech Stack</h2>
        <p className="section-subtitle">Technologies I’ve been working with recently</p>
        <div className="tech-grid">
          {techIcons.map(icon => (
            <div className="tech-item" key={icon.name}>
              <img src={icon.src} alt={icon.name} title={icon.name} 
              
              onError={(e) => e.target.style.display = 'none'}
              />
                <p className="tech-label">{icon.name}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default TechStack;
