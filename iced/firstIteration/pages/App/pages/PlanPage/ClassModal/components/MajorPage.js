import React, { useRef, useState, useEffect } from 'react';
import styles from './ClassModalComponent.module.scss';

const MajorPage = (props) => {
  const [filterValue, setFilterValue] = useState('');
  const filterRef = useRef(null);

  const { majorsList, setClassModalVisible, classModalState, setClassModalState} = props;

  useEffect(() => {
    if (filterRef.current) {
      filterRef.current.focus();
    }
  })

  const handleFilter = (e) => {
    setFilterValue(e.target.value)
  }

  const handleItemClick = (e) => {
    setClassModalState({
      ...classModalState,
      page: 'SUBJECTS',
      major: e.target.value,
    })
  }

  return (
    <>
      <div className={styles.backdrop} onClick={() => setClassModalVisible(false)} />
      <div className={`modal-dialog ${styles.panel}`} role="document">
        <div class="modal-content h-100">
          <div className={`modal-header ${styles.modalHeader}`}>
            <h5 className={`modal-title ${styles.modalTitle}`} id="exampleModalLabel">Majors</h5>
            <input type="text" className={`form-control ${styles.filterInput}`} placeholder="Filter..." onChange={handleFilter} ref={filterRef}></input>
            <button type="button" className={`close ${styles.headerCloseBtn}`} data-dismiss="modal" aria-label="Close" onClick={() => setClassModalVisible(false)}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body overflow-auto">
            <div class="list-group">
              {majorsList.filter(e => e.toLowerCase().includes(filterValue.toLowerCase())).map((item) => (
                <button 
                  type="button" 
                  class={`list-group-item list-group-item-action border-0 ${styles.listBtn}`}
                  onClick={handleItemClick}
                  value={item}
                >{item}</button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MajorPage;