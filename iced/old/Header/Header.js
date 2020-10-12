import React from 'react';
import './Header.module.scss'
import DesktopNavbar from './DesktopNavbar/DesktopNavbar';
import NavLogo from './NavLogo/NavLogo';

const Header = () => (
  <header styleName="header">
    <nav styleName="nav">
      <NavLogo />
      <DesktopNavbar />
    </nav>
  </header>
);

export default Header;
