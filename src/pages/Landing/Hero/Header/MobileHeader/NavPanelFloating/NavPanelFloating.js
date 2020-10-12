import React from 'react';
import { animated } from 'react-spring'
import { sharedStyles } from 'shared/styles';
import styles from './NavPanelFloating.module.scss';

const NavPanelFloating = (props) => {
  return (
    <animated.div className={`${sharedStyles.panel} ${styles.panelTransparent}`} style={props.style}>
      <div className={styles.closeButton} onClick={props.onClose}>
        <svg className={styles.closeIcon} width="12" height="12" viewBox="0 0 12 12"><g fill="none" fill-rule="evenodd" aria-hidden="true"><path d="M0 0h12v12H0"></path><path fill="currentColor" d="M9.5 3.205L8.795 2.5 6 5.295 3.205 2.5l-.705.705L5.295 6 2.5 8.795l.705.705L6 6.705 8.795 9.5l.705-.705L6.705 6"></path></g></svg>
      </div>
      <div className={styles.footer}>
        <div className={styles.downloadButtonWrapper}>
          <div className={`${sharedStyles.container} ${styles.downloadButton}`}>
            <button className={`${sharedStyles.button} ${sharedStyles.buttonBrand} ${sharedStyles.buttonSmall}`}>
              <svg width="24" height="24" viewBox="0 0 24 24" className={sharedStyles.icon}><g fill="currentColor"><path d="M17.707 10.708L16.293 9.29398L13 12.587V2.00098H11V12.587L7.70697 9.29398L6.29297 10.708L12 16.415L17.707 10.708Z"></path><path d="M18 18.001V20.001H6V18.001H4V20.001C4 21.103 4.897 22.001 6 22.001H18C19.104 22.001 20 21.103 20 20.001V18.001H18Z"></path></g></svg>
              Download for Linux
            </button>
          </div>
        </div>
      </div>
    </animated.div>
  );
}

export default NavPanelFloating;