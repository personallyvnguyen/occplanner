import React from 'react';
import {Link} from 'react-router-dom';
import {webpage} from 'webpage/styles';

export default function HeroContent() {
  return (
    <div className={webpage.heroContent}>
      <div className={webpage.container}>
        <Title />
        <Subtitle />
        <CTAButtons />
      </div>
    </div>
  );
};

const Title = () => (
  <h1 className={webpage.title}>Orange Coast College Planner — but better.</h1>
);

const Subtitle = () => (
  <p className={webpage.subtitle}>
    With faster class loading, a simpler UI, and the ability to share schedules, OCCPlanner makes scheduling fun and easy.
  </p>
);

const CTAButtons = () => (
  <div className={webpage.ctaContainer}>
    <Link className={webpage.ctaButton} to="/plans">Open in your browser</Link>
  </div>
);