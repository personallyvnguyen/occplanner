import React from 'react';
import {animated} from 'react-spring';
import { Link } from 'shared/components';
import { sharedStyles } from 'shared/styles';
import styles from './NavPanelSafety.module.scss';

const NavPanelMain = (props) => {
  return (
    <animated.div className={`${sharedStyles.panel} ${sharedStyles.panelThemed}`} style={props.style}>
      <div className={styles.header}>
        <button className={styles.backButton} onClick={props.onSafety}>
          <svg className={styles.backIcon} width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M16.59 8.59004L12 13.17L7.41 8.59004L6 10L12 16L18 10L16.59 8.59004Z"></path></svg>
          <span className={styles.backText}>Back</span>
        </button>
      </div>
      <ul>
        <li role="none">
          <div className={styles.sectionName}>Safety Center</div>
          <ul className={styles.list}>
            <li>
              <Link 
                className={styles.articleLink} 
                children={<span className={sharedStyles.textSmall}>Overview</span>}
                href="/safety"
                onClick={props.onClose}
              />
            </li>
          </ul>
        </li>
        <div className={styles.groupSpacer} />
        <li role="none">
          <div className={styles.sectionName}>Controlling Your Experience</div>
          <ul className={styles.list}>
            <li>
              <Link 
                className={styles.articleLink} 
                children={<span className={sharedStyles.textSmall}>Four steps to a super safe account</span>}
                href="/safety/four-steps" 
                onClick={props.onClose}
              />
            </li>
          </ul>
        </li>
      </ul>
    </animated.div>
  );
};

export default NavPanelMain;