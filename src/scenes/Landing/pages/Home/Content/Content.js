import React from 'react';
import {landing} from 'shared/styles';

export default function Content() {
  return (
    <div className={landing.contentContainer}>
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
    <div className={landing.row}>
      <div className={landing.column}>
        <h2 className={landing.featuretteHeading}>{heading}</h2>
        <p className={landing.featuretteLead}>{lead}</p>
      </div>
      <div className={landing.column}>
        <img 
          className={landing.featuretteImg} 
          src="https://via.placeholder.com/500" 
          alt="Generic placeholder image" 
        />
      </div>
    </div>
    {divider && <hr className={landing.featuretteDivider} />}
  </>
);