import React from 'react';
import { projects } from "../data";

const Projects = () => {
    return (
        <section id="projects">
            <div id="projects-container" className="container">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
</svg>
                <h1>Apps Built</h1>
            </div>
            <div className="apps">
                {projects.map((project) => (
                    <a 
                    href={project.link} 
                    key={project.image}
                    className="projects-link">
                        <div className="gallery">
                            <img 
                            alt="gallery" 
                            src={project.image}
                            className="gallery-img"/>
                            <div className="project-about">
                  <h2 className="subtitle">
                    {project.subtitle}
                  </h2>
                  <h1 className="project-title">
                    {project.title}
                  </h1>
                  <p className="decription leading-relaxed">{project.description}</p>
                </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    )
}

export default Projects
