import React, { useState } from 'react';
import { useParams, Redirect } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { sharedStyles } from 'shared/styles';
import { addClass, removeClass } from 'shared/reducers/plansSlice';
import PlanHeader from './PlanHeader/PlanHeader';
import ClassGrid from './ClassGrid/ClassGrid';
import ClassModal from './ClassModal/ClassModal';

const PlanPage = () => {
  const dispatch = useDispatch();
  const [classModalVisible, setClassModalVisible] = useState(false);
  const [classModalState, setClassModalState] = useState({
    page: 'MAJORS',
    major: null,
    subject: null,
    professor: null,
    section: null,
  });

  let { id } = useParams();
  const plan = useSelector((state) => state.plans.find(ele => ele.id === id));

  const toggleClass = (action, classObj) => {
    if (action === 'ADD') {
      dispatch(addClass({id, classObj}));
    } else if (action === 'REMOVE') {
      dispatch(removeClass({id, classObj}));
    }
  };

  return (
    <>
      {!plan 
        ? <Redirect to="/plans" />
        : <div className={sharedStyles.appContainer}>
            <PlanHeader plan={plan} />
            <ClassGrid {...{setClassModalVisible, plan, setClassModalVisible, setClassModalState}} />
            <ClassModal {...{classModalVisible, setClassModalVisible, classModalState, setClassModalState, toggleClass, plan}} />
          </div>
      }
    </>
  )
}

export default PlanPage;
