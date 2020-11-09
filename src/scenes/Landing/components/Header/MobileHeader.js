import React from 'react';
import styles from './DesktopHeader.module.scss';
import Header from 'landing/components/Header/Header';

export default function DesktopHeader() {
  return (
    <Header className={`${styles.desktopHeader}`}>
      DesktopHeader
    </Header>
  );
};