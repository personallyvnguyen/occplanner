import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header/Header';
import AccountMenu from './AccountMenu/AccountMenu';
import PlansOverview from './pages/PlansOverview/PlansOverview';
import PlanPage from './pages/PlanPage/PlanPage';
import styles from './App.module.scss'

const App = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  }

  return (
    <div>
      <Header toggleMenu={toggleMenu} />
      <main className={styles.mainContent}>
        <Switch>
          <Route path={'/plans/:id'} component={PlanPage} />
          <Route path={'/plans'} component={PlansOverview} />
        </Switch>
      </main>
      <AccountMenu menuVisible={menuVisible} toggleMenu={toggleMenu}/>
    </div>
  );
}

export default App;
