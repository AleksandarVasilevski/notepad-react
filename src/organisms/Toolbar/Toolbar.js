import React from 'react';
import { withRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import classes from './Toolbar.module.css';

const toolbar = (props) => {

  const navigationItems = () => {
    switch(props.location.pathname){
      case '/note':
        return 'Note';
      default:
        return 'Notes'
    }
  }

  return(
    <header className={classes.Toolbar}>
      <FontAwesomeIcon className={classes.HamburgerMenu} icon={faBars} size="lg" />
      <nav className={classes.NavigationItems}>{navigationItems()}</nav>
    </header>
  );
}

export default withRouter(toolbar);