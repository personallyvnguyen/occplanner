import React from 'react';
import {Link} from 'react-router-dom';
import styles from './HeroContent.module.scss';

export default function HeroContent() {
  return (
    <div className={styles.heroContent}>
      <div className={styles.container}>
        <Title />
        <Subtitle />
        <CTAButtons />
      </div>
    </div>
  );
};

const Title = () => (
  <h1 className={styles.title}>Orange Coast College Planner — but better.</h1>
);

const Subtitle = () => (
  <p className={styles.subtitle}>
    With faster class loading, a simpler UI, and the ability to share schedules, OCCPlanner makes scheduling fun and easy.
  </p>
);

const CTAButtons = () => (
  <div className={styles.ctaContainer}>
    <Link className={styles.ctaButton} to="/plans">Open in your browser</Link>
  </div>
);