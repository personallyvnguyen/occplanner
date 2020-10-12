import React from 'react';
import { Link } from "react-router-dom";
import './Hero.module.scss';

const Hero = () => (
  <div styleName="heroContainer">
    <img styleName="occLogo" alt="occ-logo" src="img/OCC_logo.png" />
    <h1 styleName="heroText">
      Orange Coast College<br />
      Schedule Planner — but better.
    </h1>
    <button styleName="heroButton">
      <Link to="/plans">
        Get Started
      </Link>
    </button>
  </div>
);

export default Hero;
