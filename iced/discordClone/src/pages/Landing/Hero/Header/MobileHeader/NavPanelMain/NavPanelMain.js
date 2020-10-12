import React from 'react';
import { animated } from 'react-spring'
import { HeaderLogo, Link } from 'shared/components';
import { sharedStyles } from 'shared/styles';
import ListItems from './ListItems/ListItems';
import styles from './NavPanelMain.module.scss';

const NavPanelMain = (props) => {
  return (
    <animated.div className={`${sharedStyles.panel} ${sharedStyles.panelThemed}`} style={props.style}>
      <Link className={`${sharedStyles.linkDefault} ${sharedStyles.logoWrapper}`} href="/">
        <HeaderLogo className={styles.logo} />
      </Link>
      <div className={styles.spacer} />
      <nav>
        <ListItems onClose={props.onClose} onSafety={props.onSafety}/>
      </nav>
    </animated.div>
  );

}

export default NavPanelMain;