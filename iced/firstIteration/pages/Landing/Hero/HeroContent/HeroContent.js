import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HeroContent.module.scss';

const HeroContent = () => (
  <div className={`jumbotron ${styles.heroContent}`}>
    <div className={`d-flex flex-column align-items-center container text-center ${styles.heroContainer}`}>
      <h1 className="display-3">
        Orange Coast College Planner — but better.
      </h1>
      <p className={`mt-3 lead ${styles.leadContainer}`}
        >With faster class loading, a simpler UI, and the ability to share schedules, OCCPlanner makes scheduling fun and easy.
      </p>
      <div className={styles.ctaContainer}>
        <p>
          <Link className="btn btn-primary btn-lg mt-3" to="/plans" role="button">
            Open in your browser
          </Link>
        </p>
      </div>
    </div>
  </div>
)

export default HeroContent;