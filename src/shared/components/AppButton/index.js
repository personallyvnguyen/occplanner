import React from 'react';
import { Link } from 'react-router-dom';
import './styles.module.scss';

const AppButton = () => (
  <div styleName="appButton">
    <Link className="button buttonWhite buttonSmall" to="/">Open Discord</Link>
  </div>
);

export default AppButton;
