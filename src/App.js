import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import ProjectContext from "../src/ProjectContext";
import Contact from './components/Contact';
import Project from './components/Project';

class App extends Component {
  state = {
    projects: [
      {
        "id": "1",
        "name": "Betta Fish Quiz",
        "route": "betta-fish-quiz",
        "image": "https://ktmng.github.io/portfolio/images/betta.png",
        "livepage": "https://ktmng.github.io/betta-fish-quiz-app/",
        "github": "https://github.com/ktmng/betta-fish-quiz-app",
        "tech": ["HTML", "CSS", "JavaScript", "jQuery"],
        "builtwith": "",
        "description": `An interactive quiz application that allows users to test their knowledge 
          about betta fish and how to care for them. The application tallies the user’s score as they go, 
          responds to their answers, and sends a custom message based on the user’s score at the end. 
          This application was created in order to showcase my capabilities 
          with the basic fundamentals of web development.`,
        "featuresimgs": ["https://ktmng.github.io/portfolio/images/betta.png", "https://ktmng.github.io/portfolio/images/project-betta-fish-quiz/app-right-ans-select.png", "https://ktmng.github.io/portfolio/images/project-betta-fish-quiz/app-right-ans-response.png", "https://ktmng.github.io/portfolio/images/project-betta-fish-quiz/app-wrong-ans-select.png", "https://ktmng.github.io/portfolio/images/project-betta-fish-quiz/app-wrong-ans-response.png", "https://ktmng.github.io/portfolio/images/project-betta-fish-quiz/app-final-score-bad.png", "https://ktmng.github.io/portfolio/images/project-betta-fish-quiz/app-final-score-good.png", "https://ktmng.github.io/portfolio/images/project-betta-fish-quiz/app-final-score-best.png"]
      },
      {
        "id": "2",
        "name": "Make-Up Your Mind",
        "route": "make-up-your-mind",
        "image": "https://ktmng.github.io/portfolio/images/makeup.png",
        "livepage": "https://ktmng.github.io/make-up-your-mind/",
        "github": "https://github.com/ktmng/make-up-your-mind",
        "tech": ["HTML", "CSS", "JavaScript", "jQuery"],
        "builtwith": "Youtube DATA API, Makeup API - Herokuapp",
        "description": `An application for make-up lovers to search and view a variety of products 
          from different brands in addition to watching videos related to what they searched for. 
          Users can view the products along with their preset corresponding descriptions, prices, 
          and links to purchase them. Users may also choose to view the videos either in the window 
          or in a new tab by clicking the respective links.`,
        "featuresimgs": ["https://ktmng.github.io/portfolio/images/makeup.png", "https://ktmng.github.io/portfolio/images/project-make-up-your-mind/app-before-search.png", "https://ktmng.github.io/portfolio/images/project-make-up-your-mind/app-during-search.png", "https://ktmng.github.io/portfolio/images/project-make-up-your-mind/app-products-with-select-product-highlight.png", "https://ktmng.github.io/portfolio/images/project-make-up-your-mind/app-videos-with-select-video-highlight.png", "https://ktmng.github.io/portfolio/images/project-make-up-your-mind/app-video-modal.png", "https://ktmng.github.io/portfolio/images/project-make-up-your-mind/app-video-modal-playing.png"]
      },
      {
        "id": "3",
        "name": "Email Template",
        "route": "email-template",
        "image": "https://ktmng.github.io/portfolio/images/email-template.png",
        "livepage": "https://ktmng.github.io/kate-meng-email-template/",
        "github": "https://github.com/ktmng/kate-meng-email-template",
        "tech": ["HTML"],
        "builtwith": "Bootstrap",
        "description": `A static webpage that displays the template of a common view of someone's inbox. 
          This project was created to familiarize myself with the use of Bootstrap's Grid System and 
          many of its classes in order to produce responsive webpages with a minimalistic design. All styling was done solely with Bootstrap classes.`,
        "featuresimgs": ["https://ktmng.github.io/portfolio/images/project-email-template/app-view-small.png", "https://ktmng.github.io/portfolio/images/project-email-template/app-view-medium.png", "https://ktmng.github.io/portfolio/images/project-email-template/app-view-large.png"]
      },
      {
        "id": "4",
        "name": "FoodExpress *Work in Progress",
        "route": "food-express",
        "image": "https://ktmng.github.io/portfolio/images/foodexpress.png",
        "livepage": "https://ktmng.github.io/foodexpress/",
        "github": "https://github.com/ktmng/foodexpress",
        "tech": ["HTML", "CSS", "JavaScript"],
        "builtwith": "Bootstrap",
        "description": `An application for foodies to record their thoughts on all sorts of food and 
          drink they've consumed.  Users are required to input basic information about each food and/or drink
          before adding it to their list of reviews, which they can view and click on to read the full description 
          in a pop-up modal. Users will also be notified on-screen of any added or deleted reviews. This 
          application was created to put what I learned about OOP in JavaScript into practice.`
      }
    ]
  };

  render() {
    const projectContextValue = this.state.projects;
    return (
      <ProjectContext.Provider value={projectContextValue}>
        <div className="App">
          <div className="nav-main">
            <Nav />
            <div className="main">
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:projRoute" element={<Project />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
          </div>
        </div>
      </ProjectContext.Provider>
    );
  }
}

export default App;