import React from 'react';
import { Link } from 'react-router-dom';
import './DesktopHeader.module.scss';
import AppButton from 'shared/components/AppButton';
import Logo from 'shared/components/Logo';

const DesktopHeader = () => (
  <header className="wrapper" styleName="wrapperDesktop">
    <nav className="nav">
      <Logo />
      <Links />
      <AppButton />
    </nav>
  </header>
);

export default DesktopHeader;

const Links = () => {
  const listInfo = {
    download: {
      route: './download',
      children: 'Download',
    },
    why_discord: {
      route: './why-discord-is-different',
      children: 'Why Discord?',
    },
    nitro: {
      route: './nitro',
      children: 'Nitro',
    },
    safetycenter: {
      route: './safetycenter',
      children: 'Safety',
    },
    helpandsupport: {
      route: '/support',
      children: 'Support',
    },
  }
  
  const listKeys = ['download', 'why_discord', 'nitro', 'safetycenter', 'helpandsupport'];

  const listItems = listKeys.map((itemName) => {
    const { route, children } = listInfo[itemName];
    return (
      <Link key={itemName} className="link" styleName="link" to={route}>{children}</Link>
    )
  });

  return (
    <div styleName="links">
      {listItems}      
    </div>
  )
};
