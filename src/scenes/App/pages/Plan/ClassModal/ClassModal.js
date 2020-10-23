import React from 'react';
import indexObj from 'shared/data/index.json';
import entriesObj from 'shared/data/entries.json';
import MajorPage from './components/MajorPage';
import SubjectPage from './components/SubjectPage';
import ProfessorPage from './components/ProfessorPage';
import SectionPage from './components/SectionPage';
import ClassPage from './components/ClassPage';

const majorsList = Object.keys(indexObj);

const ClassModal = (props) => {
  const { classModalVisible, setClassModalVisible, classModalState, setClassModalState, toggleClass, plan : { classes: planClasses } } = props;

  let currentPage = null;
  if (classModalVisible) {
    switch (classModalState.page) {
      case 'MAJORS': {
        currentPage = <MajorPage {...{majorsList, setClassModalVisible, classModalState, setClassModalState}} />
        break;
      }
      case 'SUBJECTS': {
        const subjectsList = Object.keys(indexObj[classModalState.major]);
        currentPage = <SubjectPage {...{subjectsList, setClassModalVisible, classModalState, setClassModalState}} />
        break;
      }
      case 'PROFESSORS': {
        const professorsList = Object.keys(indexObj[classModalState.major][classModalState.subject]);
        currentPage = <ProfessorPage {...{professorsList, setClassModalVisible, classModalState, setClassModalState}} />
        break;
      }
      case 'SECTIONS': {
        const crnList = indexObj[classModalState.major][classModalState.subject][classModalState.professor];
        currentPage = <SectionPage {...{crnList, setClassModalVisible, classModalState, setClassModalState}} />
        break;
      }
      case 'CLASS': {
        const classObj = entriesObj.entries.find(e => e.CRN === classModalState.section);
        currentPage = <ClassPage {...{classObj, setClassModalVisible, classModalState, setClassModalState, toggleClass, planClasses}} />
        break;
      }
    }
  }
  return (
    <>
      {currentPage}
    </>
  );
}

export default ClassModal;
