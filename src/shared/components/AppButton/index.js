import React from 'react';
import { Link } from 'react-router-dom';
import './styles.module.scss';

const AppButton = ({className}) => (
  <div styleName="appButton">
    <Link className={`button buttonWhite buttonSmall ${className}`} to="/">Open Discord</Link>
  </div>
);

export default AppButton;
