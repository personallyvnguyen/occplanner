import React from 'react';
import { AppButton, HeaderLogo, Link } from 'shared/components';
import { landingStyles, sharedStyles } from 'shared/styles';
import styles from './DesktopHeader.module.scss';
import Links from './Links/Links'

const DesktopHeader = () => (
  <header className={`${sharedStyles.wrapper} ${styles.wrapperDesktop}`}>
    <nav className={sharedStyles.nav}>
      <Link
        href="/"
        className={sharedStyles.logoLink}
        children={<HeaderLogo className={landingStyles.logo}/>}
      />
      <Links />
      <div className={styles.appButton}>
        <AppButton 
          className={`${sharedStyles.button} ${sharedStyles.buttonWhite} ${sharedStyles.buttonSmall} ${landingStyles.button}`}
        />
      </div>
    </nav>
  </header>
);

export default DesktopHeader;