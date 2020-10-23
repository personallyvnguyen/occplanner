import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import { 
  logIn, 
  selectLoggedIn, 
  selectDisplayName 
} from 'shared/reducers/userSlice';
import {Logo} from 'shared/components';
import {landing} from 'shared/styles';

export default function Header() {
  return (
    <nav className={landing.navbar}>
      <Logo />
      <div className={landing.headerButtons}>
        <AccountGreeting />
        <OpenAppButton />
      </div>
    </nav>
  );
};

const AccountGreeting = () => {
  const isLoggedIn = useSelector(selectLoggedIn);
  return isLoggedIn ? <UserGreeting /> : <GuestGreeting />;
};

const UserGreeting = () => {
  const displayName = useSelector(selectDisplayName);
  return <p className={landing.displayName} to="/">{displayName}</p>;
};

const GuestGreeting = () => {
  const dispatch = useDispatch();
  const handleClick = () => dispatch(logIn({displayName:'TestUser#0000'}));
  return (
    <Link className={landing.logInLink} onClick={handleClick} to="/"> 
      Log In
    </Link>
  );
};

const OpenAppButton = () => (
  <Link className={landing.openAppBtn} type="button" to="/plans">
    Open App
  </Link>
);