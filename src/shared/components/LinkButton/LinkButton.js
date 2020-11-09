import React from 'react';
import {Link} from 'react-router-dom';
import styles from './LinkButton.module.scss';

export default function LinkButton(props) {
  return (
    <Link 
      className={`${styles.button} ${styles.buttonWhite} ${styles.buttonSmall} ${props.className || ''}`}
      to={props.href}>
      {props.children}
    </Link>
  );
};