import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  logIn,
  selectLoggedIn,
  selectName,
} from 'shared/reducers/userSlice';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => {
  const isLoggedIn = useSelector(selectLoggedIn);
  const name = useSelector(selectName);
  const dispatch = useDispatch();

  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <Link className="navbar-brand" to="/">OCCPlanner</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <div className={`my-2 my-lg-0 ml-auto ${styles.headerButtons}`}>
          {isLoggedIn 
              ? <p className="btn text-light mb-0" to="/">{name}</p>
              : <Link 
                  type="button" 
                  className="btn btn-link text-light" 
                  to="/"
                  onClick={() => dispatch(logIn('TestUser#0000'))}
                > 
                  Log In
                </Link>
          }
          <Link className="btn btn-outline-success my-2 my-sm-0" type="button" to="/plans">Open App</Link>
        </div>
      </div>
    </nav>
  )
};

export default Header;