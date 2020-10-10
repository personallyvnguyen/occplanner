import React from 'react';
import styles from './TogglerIcon.module.scss'

import { desktopNavbar } from './../DesktopNavbar.module.scss';

const TogglerIcon = () => {
  console.log(desktopNavbar)
  const toggleClick = () => {
    console.log()
    document.querySelector(desktopNavbar).classList.toggle('open');
  }

  return (
    <button styleName="toggler" onClick={toggleClick}>
      <span styleName="togglerIcon" />
    </button>
  );
};

export default TogglerIcon;
