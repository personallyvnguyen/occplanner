import React from 'react';
import { Link } from 'react-router-dom';
import './NavLogo.module.scss'

const NavLogo = () => (
  <h5 styleName="logo">
    <Link styleName="link" to="/">
      <span styleName="leftLogo">OCC</span><span styleName="rightLogo">planner</span>
    </Link>
  </h5>
);

export default NavLogo;
