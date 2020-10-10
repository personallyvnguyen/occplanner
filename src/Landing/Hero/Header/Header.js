import React from 'react';
import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';

const Header = () => (
  <div className="row header colorSchemeWhite">
    <MobileHeader />
    <DesktopHeader /> 
  </div>
);

export default Header;
