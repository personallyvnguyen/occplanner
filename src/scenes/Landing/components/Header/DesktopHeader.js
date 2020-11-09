import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {
  logIn, 
  selectLoggedIn, 
  selectDisplayName 
} from 'shared/reducers/userSlice';
import HeaderLogo from 'shared/components/HeaderLogo/HeaderLogo';
import LinkButton from 'shared/components/LinkButton/LinkButton';
import styles from './DesktopHeader.module.scss';

export default function DesktopHeader() {
  return (
    <header className={`${styles.desktopHeader}`}>
      <nav className={`${styles.nav}`}>
        <Logo />
        <AppButtons />
      </nav>
    </header>
  );
};

const Logo = () => (
  <Link>
    <HeaderLogo />
  </Link>
);

const AppButtons = () => (
  <div className={styles.appButtons}>
    <AccountGreeting />
    <OpenAppButton />
  </div>
);

const AccountGreeting = () => {
  const isLoggedIn = useSelector(selectLoggedIn);
  return isLoggedIn ? <UserGreeting /> : <GuestGreeting />;
};

const UserGreeting = () => {
  const displayName = useSelector(selectDisplayName);
  return <p className={`${styles.displayName}`} to="/">{displayName}</p>;
};

const GuestGreeting = () => {
  const dispatch = useDispatch();
  const handleClick = () => dispatch(logIn({displayName:'TestUser#0000'}));
  return (
    <Link className={`${styles.logInLink}`} onClick={handleClick} to="/"> 
      Log In
    </Link>
  );
};

const OpenAppButton = () => (
  <LinkButton 
    className={`${styles.button}`}
    href="/plans">
    Open App
  </LinkButton>
);