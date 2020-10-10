import React from 'react';
import styles from './MobileHeader.module.scss';
import AppButton from 'shared/components/AppButton';
import Logo from 'shared/components/Logo';

const MobileHeader = () => (
  <header className="wrapper" styleName="wrapperMobile">
    <nav className="nav">
      <Logo />
      <div styleName="mobileButtonContainer">
        <AppButton className={styles.mobileAppButton} />
        <MenuIcon />
      </div>
    </nav>
  </header>
);

export default MobileHeader;

const MenuIcon = () => (
  <div styleName="menuIcon">
    <svg width="40" height="40" viewBox="0 0 40 40"><path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M33.3327 10H6.66602V15H33.3327V10ZM6.66602 18.3317H33.3327V23.3317H6.66602V18.3317ZM6.66602 26.665H33.3327V31.665H6.66602V26.665Z"></path></svg>
  </div>
);
