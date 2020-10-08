import React from 'react';
import { Link } from 'react-router-dom';
import './DesktopNavbar.scss'

const DesktopNavbar = () => {
  return (
    <div className="desktop-navbar">
      <ul className="navbar-nav">
        <li className="active">
          <Link className="nav-link nav-route" to="/plans">Your Plans</Link>
        </li>
      </ul>
      <ul className="navbar-nav right-nav">
        <span className="nav-link info-text" href="/">Sign in to save your plans.</span>
        <button className="nav-link nav-buttonstyle">
          <Link to="/">Discord Login</Link>
        </button>
      </ul>
    </div>
  );
}

export default DesktopNavbar;
