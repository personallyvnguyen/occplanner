import React from 'react';

const PlanHeader = ({ plan }) => {
  return (
    <div className="d-flex flex-row justify-content-start align-items-center">
      <h1 className="display-6 mb-0 ml-3">{plan.name}</h1>
      <h3 className="display-6 mb-0 ml-3 text-muted">{plan.semester}</h3>
    </div>
  );
}

export default PlanHeader;
