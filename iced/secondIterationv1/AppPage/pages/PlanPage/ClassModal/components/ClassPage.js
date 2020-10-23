import React, { useRef, useState, useEffect } from 'react';
import styles from './ClassModalComponent.module.scss';

const ClassPage = (props) => {
  const toggleRef = useRef(null);

  const { classObj, setClassModalVisible, classModalState, setClassModalState, toggleClass, planClasses } = props;

  const handleBack = (e) => {
    setClassModalState({
      ...classModalState,
      page: 'SECTIONS',
      section: null,
    })
  }

  const handleClassToggle = (e) => {
    if (e.target.value === 'ADD_CLASS') {
      toggleClass('ADD', {
        major: classObj.subject,
        subject: `${classObj.courseNumber} - ${classObj.courseTitle}`,
        professor: classObj.instructor,
        section: classObj.CRN,
      })
    } else {
      toggleClass('REMOVE', {
        major: classObj.subject,
        subject: `${classObj.courseNumber} - ${classObj.courseTitle}`,
        professor: classObj.instructor,
        section: classObj.CRN,
      })
    }
  }

  const isInPlan = planClasses.some(ele => ele.section === classObj.CRN);

  return (
    <>
      <div className={styles.backdrop} onClick={() => setClassModalVisible(false)} />
      <div className={`modal-dialog ${styles.panel}`} role="document">
        <div class="modal-content h-100">
          <div className={`modal-header ${styles.modalHeader}`}>
            <button type="button" class="btn btn-secondary mr-3" onClick={handleBack}>Back</button>
            <h5 className={`modal-title ${styles.modalTitle}`} id="exampleModalLabel">{classObj.courseTitle}</h5>
            {isInPlan
              ? <button type="button" class="btn btn-danger ml-3" value="REMOVE_CLASS" onClick={handleClassToggle}>Remove Course</button>
              : <button type="button" class="btn btn-success ml-3" value="ADD_CLASS" onClick={handleClassToggle}>Add Course</button>
            }
            <button type="button" className={`close ${styles.headerCloseBtn}`} data-dismiss="modal" aria-label="Close" onClick={() => setClassModalVisible(false)}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body overflow-auto">
            <div>
              <div>
                <div>Course: {classObj.courseTitle}</div>
                <div>Instructor: {classObj.instructor}</div>
                <div>CRN: {classObj.CRN}</div>
              </div>
              <div>
                <div>Department: {classObj.subject}</div>
                <div>Course Number: {classObj.courseNumber}</div>
                <div>Capacity: {classObj.capacity}</div>
                <div>Units: {classObj.creditHours}</div>
              </div>
              <div>
                <div>Syllabus: {classObj.syllabus}</div>
              </div>
              <div>
                <div>Bookstore Link: {classObj.bookstoreLink}</div>
              </div>
            </div>
            {/* <div>
              <div>
                <div>
                  <div>Days:</div>
                  <div>Times:</div>
                </div>
                <div>
                  <div>Date:</div>
                  <div>Type:</div>
                  <div>Building:</div>
                  <div>Room:</div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ClassPage;