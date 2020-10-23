import React from 'react';
import {landing} from 'shared/styles';

export default function Footer() {
  return (
    <footer className={landing.footer}>
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
  <p className={landing.scrollTop}>
    <a href="#">Back to top</a>
  </p>
);