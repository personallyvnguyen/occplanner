import React from 'react';

const PlansHeader = () => (
  <div className="d-flex flex-row justify-content-start align-items-center">
    <svg width="2.5rem" height="2.5rem" viewBox="0 0 16 16" className="bi bi-person-fill ml-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
    <h1 className="display-6 mb-0 ml-3">Personal Plans</h1>
  </div>
);

export default PlansHeader;
