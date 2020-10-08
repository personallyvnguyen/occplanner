import React from 'react';
import { Link } from "react-router-dom";
import styles from './Hero.module.scss';

const Hero = () => (
  <div className={styles.heroContainer}>
    <img className={styles.occLogo} alt="occ-logo" src="img/OCC_logo.png" />
    <h1 className={styles.heroText}>
      Orange Coast College<br />
      Schedule Planner — but better.
    </h1>
    <button className={styles.heroButton}>
      <Link to="/plans">
        Get Started
      </Link>
    </button>
  </div>
);

export default Hero;
