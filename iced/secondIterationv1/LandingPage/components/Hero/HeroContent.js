import React from 'react';
import {Link} from 'react-router-dom';
import {landing} from 'shared/styles';

export default function HeroContent() {
  return (
    <div className={landing.heroContent}>
      <div className={landing.container}>
        <Title />
        <Subtitle />
        <CTAButtons />
      </div>
    </div>
  );
};

const Title = () => (
  <h1 className={landing.title}>Orange Coast College Planner — but better.</h1>
);

const Subtitle = () => (
  <p className={landing.subtitle}>
    With faster class loading, a simpler UI, and the ability to share schedules, OCCPlanner makes scheduling fun and easy.
  </p>
);

const CTAButtons = () => (
  <div className={landing.ctaContainer}>
    <Link className={landing.ctaButton} to="/plans">Open in your browser</Link>
  </div>
);