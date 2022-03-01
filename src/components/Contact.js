import React from "react";

export default class Projects extends React.Component {
  render() {
    return (
      <div>
        <h1 className="main-h1">CONTACT ME</h1>
        <section className="main-section" id="contact-section">
          <ul id="contact-links-ul">
            <li className="contact-li">
              <a href="mailto:katemeng08@gmail.com?"><img className="contact-icons" src="https://ktmng.github.io/portfolio/images/email-logo.png" alt="Icon of an envelope"/></a>
              <a className="contact-a main-a" href="mailto:katemeng08@gmail.com?">Email</a>
            </li>
            <li className="contact-li">
            <a href="mailto:katemeng08@gmail.com?"><img className="contact-icons" src="https://ktmng.github.io/portfolio/images/linkedin-logo.png" alt="Icon of the Linkedin logo"/></a>
              <a className="contact-a main-a" href="https://www.linkedin.com/in/kate-meng/" target="_blank" rel="noreferrer">Linkedin</a>
            </li>
            <li className="contact-li">
            <a href="mailto:katemeng08@gmail.com?"><img className="contact-icons" src="https://ktmng.github.io/portfolio/images/github-logo.png" alt="Icon of the Github logo"/></a>
              <a className="contact-a main-a" href="https://github.com/ktmng" target="_blank" rel="noreferrer">Github</a>
            </li>
          </ul>
          <p id="contact-p">
          Feel free to contact me with any of the links above and thank you in advance for reaching out!
          </p>
        </section>

      </div>
    );
  };
}