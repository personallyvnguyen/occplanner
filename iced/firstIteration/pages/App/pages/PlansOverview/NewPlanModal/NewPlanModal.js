import React, { useRef } from 'react';
import styles from './NewPlanModal.module.scss';

const NewPlanModal = ({newPlanVisible, setNewPlanVisible, createPlan}) => {
  const planNameEl = useRef(null);
  const semesterEl = useRef(null);

  const submitNewPlan = () => {
    const newPlan = {
      name: planNameEl.current.value,
      semester: semesterEl.current.value,
      classes: [],
      sumUnits: 0,
    }

    createPlan(newPlan);
  }

  return (
    <>
      {newPlanVisible && 
        <>
          <div className={styles.backdrop} onClick={() => setNewPlanVisible(false)} />
          <div className={`modal-dialog ${styles.panel}`} role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">New Plan</h5>
                <button type="button" className={`close ${styles.headerCloseBtn}`} data-dismiss="modal" aria-label="Close" onClick={() => setNewPlanVisible(false)}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="form-group">
                    <label for="recipient-name" class="col-form-label">Plan Name:</label>
                    <input type="text" class="form-control" id="recipient-name" placeholder="My Plan" ref={planNameEl} />
                  </div>
                  <div class="form-group">
                    <label for="message-text" class="col-form-label">Semester:</label>
                    <select class="custom-select" id="inputGroupSelect01" ref={semesterEl}>
                      <option selected>Choose...</option>
                      <option value="Fall 2020">Fall 2020</option>
                      <option value="Spring 2021">Spring 2021</option>
                    </select>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={() => setNewPlanVisible(false)}>Close</button>
                <button type="submit" class="btn btn-primary" onClick={submitNewPlan}>Create Plan</button>
              </div>
            </div>
          </div>
        </>
      }
    </>
  );
}

export default NewPlanModal;
