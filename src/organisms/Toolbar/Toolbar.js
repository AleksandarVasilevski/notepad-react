import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import classes from './Toolbar.module.css';

const toolbar = (props) => {
  return(
    <header className={classes.Toolbar}>
      <FontAwesomeIcon className={classes.HamburgerMenu} icon={faBars} size="lg" />
      <h1 className={classes.AppTitle}>Notes</h1>
      <nav className={classes.NavigationItems}>Navigation Items</nav>
    </header>
  );
}

export default toolbar;