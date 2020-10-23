import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addPlan } from 'shared/reducers/plansSlice';
import { sharedStyles } from 'shared/styles';
import PlansHeader from './PlansHeader/PlansHeader';
import PlansGrid from './PlansGrid/PlansGrid';
import NewPlanModal from './NewPlanModal/NewPlanModal';

const PlansOverview = () => {
  const dispatch = useDispatch();
  const [newPlanVisible, setNewPlanVisible] = useState(false);
  
  const createPlan = (plan) => {
    const { name, semester, classes, sumUnits } = plan;

    const newPlan = {
      id: uuid(),
      name,
      semester,
      classes,
      sumUnits,
    };

    dispatch(addPlan(newPlan));
    setNewPlanVisible(false);
  };

  return (
    <div className={sharedStyles.appContainer}>
      <PlansHeader />
      <PlansGrid {...{setNewPlanVisible}} />
      <NewPlanModal {...{newPlanVisible, setNewPlanVisible, createPlan}}/>
    </div>
  );
}

export default PlansOverview;
