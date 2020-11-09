import React from 'react';
import Header from 'landing/components/Header/Header';
import HeroContent from './HeroContent';
import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <div className={`${styles.grid} ${styles.heroBackground}`}>
      <Header />
      {/* <HeroContent /> */}
    </div>
  );
};