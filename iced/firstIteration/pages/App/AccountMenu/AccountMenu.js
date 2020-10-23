import React from 'react';
import { useHistory } from 'react-router-dom'
import { useTransition, animated } from 'react-spring'
import { useSelector, useDispatch } from 'react-redux';
import { useOuterClick } from 'shared/hooks';
import { logOut, selectName } from 'shared/reducers/userSlice';
import styles from './AccountMenu.module.scss'

const AccountMenu = ({menuVisible, toggleMenu}) => {
  const history = useHistory();
  const name = useSelector(selectName);
  const dispatch = useDispatch();

  const innerRef = useOuterClick(e => {
    toggleMenu();
  });

  const transitionMenu = useTransition(menuVisible, null, {
    config: { mass: 1, tension: 400, friction: 18, clamp: true },
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const onLogOut = () => {
    history.push(`/`);
    dispatch(logOut());
  }

  return (
    <>
      {transitionMenu.map(({ item, key, props }) =>
        item &&
          <animated.div className={styles.accountPanel} style={props} key={key} ref={innerRef}>
            <div className={styles.header}>
              <div className={styles.headerText}>
                Account
              </div> 
              <button className={styles.closeBtn} onClick={toggleMenu} >
                <span className={styles.closeIcon} role="presentation">
                  <svg width="10" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.58579 7L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683418 0.292893 0.292893C0.683418 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7 5.58579L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893C14.0976 0.683418 14.0976 1.31658 13.7071 1.70711L8.41421 7L13.7071 12.2929C14.0976 12.6834 14.0976 13.3166 13.7071 13.7071C13.3166 14.0976 12.6834 14.0976 12.2929 13.7071L7 8.41421L1.70711 13.7071C1.31658 14.0976 0.683418 14.0976 0.292893 13.7071C-0.0976311 13.3166 -0.0976311 12.6834 0.292893 12.2929L5.58579 7Z" fill="currentColor"></path></svg>
                </span>
              </button>
            </div>
            <div className={styles.navContainer}>
              <div className={styles.navInfo}>
                <span className={styles.navText}>
                  {name}
                </span>
              </div>
              <a className={styles.navButton} onClick={onLogOut}>
                <span className={styles.navText}>
                  Log Out
                </span>
              </a>
            </div>
          </animated.div>
      )}
    </>
  );
}

export default AccountMenu;
