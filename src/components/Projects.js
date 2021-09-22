import React from 'react';
import { projects } from "../data";

const Projects = () => {
    return (
        <section id="projects">
            <div id="projects-container" className="container">
                <h1>Apps Built</h1>
                <p className="">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam fuga dolore.
                    </p>
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
