import React from 'react';
import { Link } from 'react-router-dom';

const AppButton = ({className}) => (
  <Link className={className} to="/">Open Discord</Link>
);

export default AppButton;
