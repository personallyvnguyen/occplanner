import React from 'react';
import { landingStyles, sharedStyles } from 'shared/styles';
import DesktopHeader from './DesktopHeader/DesktopHeader';
import MobileHeader from './MobileHeader/MobileHeader';

const Header = () => (
  <div className={`${sharedStyles.row} ${sharedStyles.header} ${landingStyles.colorSchemeWhite}`}>
    <MobileHeader />
    <DesktopHeader /> 
  </div>
);

export default Header;
