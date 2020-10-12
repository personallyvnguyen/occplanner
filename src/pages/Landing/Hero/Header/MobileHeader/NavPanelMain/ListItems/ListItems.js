import React from 'react';
import { Link, LinkLike } from 'shared/components';
import { sharedStyles } from 'shared/styles';
import styles from './ListItems.module.scss';

const itemsInfo = [
  {
    itemName: null,
    route: './',
    title: 'Home',
  },
  {
    itemName: 'download',
    route: './download',
    title: 'Download',
  },
  {
    itemName: 'why_discord',
    route: './why-discord-is-different',
    title: 'Why Discord?',
  },
  {
    itemName: 'nitro',
    route: './nitro',
    title: 'Nitro',
  },
  {
    type: 1,
    itemName: 'safetycenter',
    route: './safetycenter',
    title: 'Safety',
  },
  {
    itemName: 'helpandsupport',
    route: '/support',
    title: 'Support',
  },
];

const NavItem = ({title, route, onClose}) => (
  <Link 
    className={styles.link}
    activeClassName={styles.linkActive}
    href={route}
    onClick={onClose}
  >
    <span className={`${sharedStyles.textSmall}`}>{title}</span>
  </Link>
);

const ListItems = (props) => {
  const listItems = itemsInfo.map((item) => {
    const { itemName, route, title, type } = item;
    if (type === 1) {
      return (
        <LinkLike
          key={itemName}
          className={styles.link}
          onClick={props.onSafety}
          children={
            <React.Fragment>
              <span className={sharedStyles.textSmall}>
                {title}
              </span>
              <svg className={styles.caret} width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M16.59 8.59004L12 13.17L7.41 8.59004L6 10L12 16L18 10L16.59 8.59004Z"></path></svg>
            </React.Fragment>
          }
          route={route}
        />
      )
    } else {
      return (
        <NavItem
          key={itemName}
          title={title}
          route={route}
          onClose={props.onClose}
        />
      )
    }
  });

  return listItems;
}

export default ListItems;