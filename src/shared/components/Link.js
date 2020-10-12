import React from 'react';
import { NavLink } from 'react-router-dom';
import { sharedStyles } from 'shared/styles';

const Link = ({className, children, href, activeClassName, onClick}) => (
  <NavLink 
    className={`${sharedStyles.link} ${className || ''}`.trim()}
    to={href}
    activeClassName={activeClassName && `${className} ${activeClassName}`}
    onClick={onClick}
    exact
  >
    {children}
  </NavLink>
);

export default Link;
