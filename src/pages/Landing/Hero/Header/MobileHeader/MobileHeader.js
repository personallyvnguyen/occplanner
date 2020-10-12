import React, { useState } from 'react';
import {useTransition, animated} from 'react-spring'
import { AppButton, HeaderLogo, Link } from 'shared/components';
import { landingStyles, sharedStyles } from 'shared/styles';
import styles from './MobileHeader.module.scss';
import NavPanelMain from './NavPanelMain/NavPanelMain';
import NavPanelSafety from './NavPanelSafety/NavPanelSafety';
import NavPanelFloating from './NavPanelFloating/NavPanelFloating';

const MobileHeader = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [safetyVisible, setSafetyVisible] = useState(false);

  const transitions = useTransition(menuVisible, null, {
    config: {mass:1, tension:170, friction:18, clamp: true},
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const transitionsNav = useTransition(menuVisible, null, {
    config: {mass:1, tension:170, friction:18, clamp: true},
    from: { transform: 'translate(330px)' },
    enter: { transform: 'translate(0px)' },
    leave: { transform: 'translate(330px)' },
  });

  const transitionsSafetyNav = useTransition(safetyVisible, null, {
    config: {mass:1, tension:170, friction:18, clamp: true},
    from: { transform: 'translate(330px)' },
    enter: { transform: 'translate(0px)' },
    leave: { transform: 'translate(330px)' },
  });
    
  const onClose = () => {
    setMenuVisible(false);
    setSafetyVisible(false);
  }

  const onSafety = () => {
    setSafetyVisible(!safetyVisible);
  }

  return (
    <header className={`${sharedStyles.wrapper} ${styles.wrapperMobile}`}>
      <nav className={sharedStyles.nav}>
        <Link
          className={sharedStyles.logoLink}
          children={<HeaderLogo className={landingStyles.logo}/>}
          href="/"
        />
        <div className={styles.mobileButtonContainer}>
          <AppButton 
            className={`${sharedStyles.button} ${sharedStyles.buttonWhite} ${sharedStyles.buttonSmall} ${landingStyles.button} ${styles.mobileAppButton}`}
          />
          <button 
            className={landingStyles.menuIcon}
            onClick={() => setMenuVisible(true)}
          >
            <svg width="40" height="40" viewBox="0 0 40 40"><path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M33.3327 10H6.66602V15H33.3327V10ZM6.66602 18.3317H33.3327V23.3317H6.66602V18.3317ZM6.66602 26.665H33.3327V31.665H6.66602V26.665Z"></path></svg>
          </button>
        </div>

        {transitions.map(({ item, key, props }) =>
          item && 
            <animated.div className={styles.backdrop} style={props} key={key} onClick={onClose} />
          )
        }

        {transitionsNav.map(({ item, key, props }) =>
          item && 
            <React.Fragment key={key}>
              <NavPanelMain style={props} onClose={onClose} onSafety={onSafety}/>
              <NavPanelFloating style={props} onClose={onClose}/>
            </React.Fragment>
          )
        }

        {transitionsSafetyNav.map(({ item, key, props }) =>
          item && 
            <NavPanelSafety style={props} onClose={onClose} onSafety={onSafety}/>
          )
        }
        
      </nav>
    </header>
  );
};

export default MobileHeader;