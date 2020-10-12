import React from 'react';
import { Link } from 'react-router-dom';
import './DesktopNavbar.module.scss'

import TogglerIcon from './TogglerIcon/TogglerIcon';

const DesktopNavbar = () => {
  return (
    <div styleName="desktopNavbar">
      <TogglerIcon />
      <ul styleName="navbarNav">
        <li className="active">
          <Link styleName="navLink navRoute" to="/plans">Your Plans</Link>
        </li>
      </ul>
      <ul styleName="rightNav navbarNav">
        <span styleName="navLink infoText" href="/">Sign in to save your plans.</span>
        <button styleName="navButton navLink">
          <Link styleName="link" to="/">Discord Login</Link>
        </button>
      </ul>
    </div>
  );
}

export default DesktopNavbar;
