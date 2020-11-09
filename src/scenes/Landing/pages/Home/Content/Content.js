import React from 'react';
import styles from './Content.module.scss';

export default function Content() {
  return (
    <div className={styles.contentContainer}>
      <Featurettes />
    </div>
  );
};

const Featurettes = () => {
  const featuretteList = [
    {
      heading: 'Featurette Heading Text 1',
      lead: 'Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.',
      divider: true,
    },
    {
      heading: 'Featurette Heading Text 2',
      lead: 'Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.',
      divider: true,
    },
    {
      heading: 'Featurette Heading Text 3',
      lead: 'Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.',
      divider: true,
    },
  ];

  return featuretteList.map(item => <Featurette {...item} />);
};

const Featurette = ({heading, lead, divider}) => (
  <>
    <div className={styles.row}>
      <div className={styles.column}>
        <h2 className={styles.featuretteHeading}>{heading}</h2>
        <p className={styles.featuretteLead}>{lead}</p>
      </div>
      <div className={styles.column}>
        <img 
          className={styles.featuretteImg} 
          src="https://via.placeholder.com/500" 
          alt="Generic placeholder" 
        />
      </div>
    </div>
    {divider && <hr className={styles.featuretteDivider} />}
  </>
);