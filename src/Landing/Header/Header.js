import React from 'react';
import './Header.scss'

import DesktopNavbar from './DesktopNavbar/DesktopNavbar';
import NavLogo from './NavLogo/NavLogo';
import TogglerIcon from './TogglerIcon/TogglerIcon';

const Header = () => (
  <header>
    <nav>
      <NavLogo />
      <TogglerIcon />
      <DesktopNavbar />
    </nav>
  </header>
);

export default Header;
