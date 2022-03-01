import React from "react";
import { Link } from 'react-router-dom';

export default class Nav extends React.Component {

  render() {
    return (
      <nav className="nav">
        <Link id="logo-link" to="/"><img id="logo-png" src="../../images/kate-logo.png" alt="Kate Meng's Logo" /></Link>
        <Link id="name-link" to="/"><h1 id="name">KATE MENG</h1></Link>
        <ul className="nav-ul">
          <li className="nav-li"><Link className="nav-link" to="/">HOME</Link></li>
          <li className="nav-li"><Link className="nav-link" to="/projects">PROJECTS</Link></li>
          <li className="nav-li"><Link className="nav-link" to="/about">ABOUT</Link></li>
          <li className="nav-li"><Link className="nav-link" to="/contact">CONTACT</Link></li>
        </ul>
      </nav>
    );
  };
}



