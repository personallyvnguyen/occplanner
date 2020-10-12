import React from 'react';
import { sharedStyles } from 'shared/styles'
import styles from './Hero.module.scss';
import Header from './Header/Header';

const Hero = () => (
  <div className={`${sharedStyles.grid} ${styles.heroBackground}`}>
    <Header />
  </div>
);

export default Hero;
