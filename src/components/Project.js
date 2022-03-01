import React from "react";
import ProjectContext from "../ProjectContext";
import { useLocation } from 'react-router-dom'
import { useContext } from "react";

function Project() {

    //get all project context (this is an object)
    const projects = useContext(ProjectContext);
    // console.log(projects);
    // console.log (typeof projects);

    //get the current pathname
    const location = useLocation();
    const selectedProjPathName = location.pathname;
    // console.log(selectedProjPathName);

    //get the current project.route from current pathname
    const selectedProjRoute = selectedProjPathName.replace("/projects/", "");
    // console.log(selectedProjRoute);
    // console.log(typeof selectedProjRoute);

    //get selected project details by matching current project.route to that in all projects
    let selectedProj = {};
    for (let i = 0; i < projects.length; i++) {
        if (projects[i].route === selectedProjRoute) {
            // console.log(projects[i]);
            // console.log(typeof projects[i])
            selectedProj = projects[i];
        }
    }
    console.log(selectedProj);

    //get features images 
    const featuresImgs = selectedProj.featuresimgs;
    console.log(featuresImgs);

    //display selected project's details on the page
    if (selectedProj.builtwith === '') {
        return (
            <div>
                <h1 className="main-h1 pj-h1">{selectedProj.name}</h1>
                <section className="main-section pj-section">
                    <h2>DESCRIPTION</h2>
                    <p className="pj-description">{selectedProj.description}</p>

                    <h2>PROJECT LINKS</h2>
                    <a className="proj-link-live" href={selectedProj.livepage} target="_blank" rel="noreferrer">Live Page</a>|
                    <a className="proj-link-git" href={selectedProj.github} target="_blank" rel="noreferrer">Github</a>

                    <h2>TECHNOLOGIES</h2>
                    <p className="proj-tech">Technologies: {selectedProj.tech.join(', ')}</p>

                    <h2>SCREENSHOTS</h2>
                    <ul className="pj-screenshots-ul">
                        {featuresImgs.map((imgSrc) => {
                            return (
                                <li className='pj-img-li' key={imgSrc}>
                                    <img className="pj-img" src={imgSrc} alt="A screenshot of one of the project's features"></img>
                                </li>
                            );
                        })}
                    </ul>
                </section>
            </div>
        )
    } else {
        return (
            <div>
                <h1 className="main-h1 pj-h1">{selectedProj.name}</h1>
                <section className="main-section pj-section">
                    <h2>DESCRIPTION</h2>
                    <p>{selectedProj.description}</p>

                    <h2>PROJECT LINKS</h2>
                    <a className="proj-link-live" href={selectedProj.livepage} target="_blank" rel="noreferrer">Live Page</a>|
                    <a className="proj-link-git" href={selectedProj.github} target="_blank" rel="noreferrer">Github</a>

                    <h2>TECHNOLOGIES</h2>
                    <p className="proj-tech">Technologies: {selectedProj.tech.join(', ')}</p>
                    <p className="proj-built-with">Built With: {selectedProj.builtwith}</p>

                    <h2>SCREENSHOTS</h2>
                    <ul className="pj-screenshots-ul">
                        {featuresImgs.map((imgSrc) => {
                            return (
                                <li className='pj-img-li' key={imgSrc}>
                                    <img className="pj-img" src={imgSrc} alt="A screenshot of one of the project's features"></img>
                                </li>
                            );
                        })}
                    </ul>
                </section>
            </div>
        )
    }

}



export default Project;