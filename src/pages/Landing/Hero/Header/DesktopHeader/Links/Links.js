import React from 'react';
import { Link } from 'shared/components';
import { landingStyles } from 'shared/styles';
import styles from './Links.module.scss';

const itemsInfo = [
  {
    itemName: 'download',
    route: './download',
    children: 'Download',
  },
  {
    itemName: 'why_discord',
    route: './why-discord-is-different',
    children: 'Why Discord?',
  },
  {
    itemName: 'nitro',
    route: './nitro',
    children: 'Nitro',
  },
  {
    itemName: 'safetycenter',
    route: './safetycenter',
    children: 'Safety',
  },
  {
    itemName: 'helpandsupport',
    route: '/support',
    children: 'Support',
  },
];

const listItems = itemsInfo.map((item) => {
  const { itemName, route, children } = item;
  return (
    <Link 
      key={itemName} 
      className={landingStyles.link}
      href={route}
    >
      {children}
    </Link>
  )
});

const Links = () => (
  <div className={styles.links}>
    {listItems}      
  </div>
)

export default Links;
