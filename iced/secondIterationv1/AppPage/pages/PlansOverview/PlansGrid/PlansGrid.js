import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectPlans } from 'shared/reducers/plansSlice';
import styles from './PlansGrid.module.scss';

const PlanItem = (props) => (
  <div className={styles.planItem}>
    {props.children}
  </div>
);

const RegularPlanItem = ({ plan }) => (
  <PlanItem>
    <Link className={styles.planTile} to={`/plans/${plan.id}`}>
      <span className={styles.fadePanel} />
      <div className={styles.planTileDetails}>
        <div className={styles.planName}>
          <span className={styles.planText}>{plan.name}</span>
        </div>
        <div className={styles.planSemesterContainer}>
          <span className={styles.planSemesterText}>{plan.semester}</span>
        </div>
      </div>
    </Link>
  </PlanItem>
);

const NewPlanItem = ({ setNewPlanVisible }) => (
  <PlanItem>
    <div className={`${styles.planTile} ${styles.planTileNew}`} onClick={() => setNewPlanVisible(true)}>
      <span className={styles.newPlanText}>Create new plan</span>
    </div>
  </PlanItem>
);

const PlansGrid = ({ setNewPlanVisible }) => {
  const plans = useSelector(selectPlans);

  return (
    <div className={styles.plansGrid}>
      {plans.map((plan) => (
        <RegularPlanItem key={plan.id} plan={plan} />
      ))}
      <NewPlanItem setNewPlanVisible={setNewPlanVisible} />
    </div>
  );
}

export default PlansGrid;
