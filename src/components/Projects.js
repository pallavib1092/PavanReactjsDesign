import React, { Component } from 'react';
import './Projects.css';

class Projects extends Component {
  render() {
    const { darkMode } = this.props;

    const projects = [
      {
        title: 'Project Title Goes Here',
        description: 'This is a sample project description. Random things are here in description.',
        tech: ['HTML', 'JavaScript', 'SASS', 'React'],
        image: 'https://images.unsplash.com/photo-1557682250-33bd709cbe85',
        live: '#',
        code: '#',
      },
      {
        title: 'Colorful UI Project',
        description: 'Another sample description of a great project with color.',
        tech: ['React', 'Tailwind', 'Firebase'],
        image: 'https://images.unsplash.com/photo-1557682250-33bd709cbe85',
        live: '#',
        code: '#',
      },
      {
        title: 'Blur & Glow App',
        description: 'A stunning UI project with blur and glowing effects.',
        tech: ['HTML', 'CSS', 'JS'],
        image: 'https://images.unsplash.com/photo-1557682250-33bd709cbe85',
        live: '#',
        code: '#',
      },
      {
        title: 'Soft Gradient Landing',
        description: 'Gradient backgrounds and minimal content layout.',
        tech: ['HTML', 'Tailwind', 'React'],
        image: 'https://images.unsplash.com/photo-1557682250-33bd709cbe85',
        live: '#',
        code: '#',
      },
      {
        title: 'Wave Flow UI',
        description: 'Vibrant UI with flowy wave backgrounds.',
        tech: ['React', 'CSS Modules'],
        image: 'https://images.unsplash.com/photo-1557682250-33bd709cbe85',
        live: '#',
        code: '#',
      },
      {
        title: 'Bold Yellow Project',
        description: 'High contrast yellow-black card layout.',
        tech: ['HTML', 'CSS'],
        image: 'https://images.unsplash.com/photo-1557682250-33bd709cbe85',
        live: '#',
        code: '#',
      },
    ];

    return (
      <section className={`projects-section ${darkMode ? 'dark' : ''}`} id="projects">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Things I’ve built so far</p>
        <div className="project-card-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.image} alt="Project" className="project-img" />
              <div className="card-details">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p className="tech-stack">
                  <strong>Tech stack:</strong> {project.tech.join(', ')}
                </p>
                <div className="card-buttons">
                  <a href={project.live} target="_blank" rel="noreferrer">🔗 Live Preview</a>
                  <a href={project.code} target="_blank" rel="noreferrer">💻 View Code</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default Projects;
