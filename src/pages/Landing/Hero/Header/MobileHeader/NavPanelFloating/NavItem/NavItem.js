import React from 'react';
import { Link } from 'shared/components';
import { sharedStyles } from 'shared/styles';
import styles from './NavItem.module.scss';

const NavItem = ({title, route}) => (
  <Link 
    className={`${sharedStyles.link} ${styles.link}`}
    activeClassName={styles.linkActive}
    href={route}
  >
    <span className={`${sharedStyles.textSmall}`}>{title}</span>
  </Link>
);

export default NavItem;