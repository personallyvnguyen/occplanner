import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectPlans } from 'shared/reducers/plansSlice';
import styles from './ClassGrid.module.scss';

const PlanItem = (props) => (
  <div className={styles.planItem}>
    {props.children}
  </div>
);

const RegularPlanItem = ({ classObj, setClassModalVisible, setClassModalState }) => {
  const handleClassClick = () => {
    setClassModalVisible(true);
    setClassModalState({
      page: 'CLASS',
      major: classObj.major,
      subject: classObj.subject,
      professor: classObj.professor,
      section: classObj.section,
    })
  }

  return (
    <PlanItem>
      <div className={styles.planTile} onClick={handleClassClick}>
        <span className={styles.fadePanel} />
        <div className={styles.planTileDetails}>
          <div className={styles.planName}>
            <span className={styles.planText}>{classObj.subject}</span>
          </div>
          <div className={styles.planSemesterContainer}>
            <span className={styles.planSemesterText}>{classObj.professor}</span>
          </div>
        </div>
      </div>
    </PlanItem>
  );
}

const NewPlanItem = ({ setClassModalVisible, setClassModalState }) => {
  const handleAddNewClass = () => {
    setClassModalVisible(true);
    setClassModalState({
      page: 'MAJORS',
      major: null,
      subject: null,
      professor: null,
      section: null,
    });
  };

  return (
    <PlanItem>
      <div className={`${styles.planTile} ${styles.planTileNew}`} onClick={handleAddNewClass}>
        <span className={styles.newPlanText}>Add new class</span>
      </div>
    </PlanItem>
  );
}

const ClassGrid = ({ setClassModalVisible, plan: { classes: planClasses }, setClassModalState }) => {
  return (
    <div className={styles.plansGrid}>
      {planClasses.map((classObj) => (
        <RegularPlanItem key={classObj.subject} {...{ classObj, setClassModalVisible, setClassModalState }} />
      ))}
      <NewPlanItem setClassModalVisible={setClassModalVisible} setClassModalState={setClassModalState} />
    </div>
  );
}

export default ClassGrid;
