import React from 'react';
import { Link } from 'react-router-dom';
import './NavLogo.scss'

const NavLogo = () => (
  <h5 className="logo">
    <Link to="/">
      <span className="leftLogo">OCC</span><span className="rightLogo">planner</span>
    </Link>
  </h5>
);

export default NavLogo;
