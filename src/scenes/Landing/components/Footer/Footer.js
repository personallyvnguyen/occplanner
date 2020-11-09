import React from 'react';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <FooterItems />
      <ScrollTop />
    </footer>
  );
};

const FooterItems = () => (
  <p>
    Made for CS220 (Fall 2020) &middot; 
    <a href="#">Privacy</a> &middot; 
    <a href="#">Terms</a>
  </p>
);

const ScrollTop = () => (
  <p className={styles.scrollTop}>
    <a href="#">Back to top</a>
  </p>
);