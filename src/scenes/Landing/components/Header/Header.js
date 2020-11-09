import React from 'react';
import DesktopHeader from './DesktopHeader';
import styles from './Header.module.scss';

export default function Header(props) {
  return (
    <div className={`${styles.header} ${props.className}`}>
      <DesktopHeader />
    </div>
  );
};