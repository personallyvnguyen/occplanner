import React from 'react';
import { sharedStyles } from 'shared/styles';

const LinkLike = ({className, children, onClick}) => (
  <span 
    className={`${sharedStyles.link} ${className || ''}`.trim()}
    onClick={onClick}
  >
    {children}
  </span>
);

export default LinkLike;
