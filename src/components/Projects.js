import React from "react";
import { Link } from "react-router-dom";
import ProjectContext from "../ProjectContext";

export default class Projects extends React.Component {
  static contextType = ProjectContext;
  render() {
    const projects = this.context;

    return (
      <section className="projects-section">
        <h1 id="projects-h1" className="main-h1">PROJECTS</h1>
        <ul className='projects-ul'>

          {projects.map((proj) => {
            if (proj.builtwith === '') {
              return (
                <li className='proj-li' key={proj.id} route={proj.route}>
                  <img className='proj-img' src={`${proj.image}`} alt="The main view of a project." />
                  <div className='proj-text'>
                    <Link className='proj-name' to={`/projects/${proj.route}`}>{proj.name}</Link>
                    <p className="proj-links">
                      <a className="proj-link-live" href={proj.livepage} target="_blank" rel="noreferrer">Live Page</a>|
                      <a className="proj-link-git" href={proj.github} target="_blank" rel="noreferrer">Github</a>
                    </p>
                    <p className="proj-tech">Technologies: {proj.tech.join(', ')}</p>
                    <p className='proj-description'>{proj.description}</p>
                  </div>
                </li>
              )
            } else {
              return (
                <li className='proj-li' key={proj.id} route={proj.route}>
                  <img className='proj-img' src={`${proj.image}`} alt="The main view of a project." />
                  <div className='proj-text'>
                    <Link className='proj-name' to={`/projects/${proj.route}`}>{proj.name}</Link>
                    <p className="proj-links">
                      <a className="proj-link-live" href={proj.livepage} target="_blank" rel="noreferrer">Live Page</a>|
                      <a className="proj-link-git" href={proj.github} target="_blank" rel="noreferrer">Github</a>
                    </p>
                    <p className="proj-tech">Technologies: {proj.tech.join(', ')}</p>
                    <p className="proj-built-with">Built With: {proj.builtwith}</p>
                    <p className='proj-description'>{proj.description}</p>
                  </div>
                </li>
              )
            }
          })}
        </ul>
      </section>
    );
  };
}