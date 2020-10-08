import React from 'react';
import './TogglerIcon.scss'

const TogglerIcon = () => {
  const toggleClick = () => {
    document.querySelector('.desktop-navbar').classList.toggle('open');
  }

  return (
    <button className="toggler" onClick={toggleClick}>
      <span className="togglerIcon" />
    </button>
  );
};

export default TogglerIcon;
