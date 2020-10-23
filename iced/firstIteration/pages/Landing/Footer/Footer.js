import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => (
  <footer className={`container ${styles.footer}`}>
    <p className="float-right"><a href="#">Back to top</a></p>
    <p>Made for CS220 (Fall 2020) &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
  </footer>
)

export default Footer;