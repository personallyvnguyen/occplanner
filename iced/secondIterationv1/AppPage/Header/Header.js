import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  logIn,
  selectLoggedIn,
  selectName,
} from 'shared/reducers/userSlice';
import styles from './Header.module.scss';

const Header = ({ toggleMenu }) => {
  const isLoggedIn = useSelector(selectLoggedIn);
  const name = useSelector(selectName);
  const dispatch = useDispatch();

  return (
    <nav className={`navbar navbar-expand-md navbar-dark justify-content-between fixed-top bg-dark overflow-hidden ${styles.header}`}>
      <button type="button" className={`d-flex flex-row justify-content-start align-items-center ${styles.actionBtn}`}>
        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-journal mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
          <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
        </svg>
        Plans
      </button>
      <Link className="navbar-brand" to="/plans">OCCPlanner</Link>
      {isLoggedIn
        ? <button
            type="button"
            className={styles.actionBtn}
            onClick={() => toggleMenu()}
          >
            Account
          </button>
        : <div
            type="button"
            className="btn btn-link text-light"
            to="/"
            onClick={() => dispatch(logIn('TestUser#0000'))}
          >
            Log In
          </div>
      }

    </nav>
  );
}

export default Header;