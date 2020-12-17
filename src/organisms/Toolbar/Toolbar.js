import React from 'react';
import { withRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import NotesNavigationItems from '../../molecules/NotesNavigationItems/NotesNavigationItems';
import NoteNavigationItems from '../../molecules/NoteNavigationItems/NoteNavigationItems';

import classes from './Toolbar.module.css';

const toolbar = (props) => {

  const navigationItems = () => {
    switch(props.location.pathname){
      case '/note':
        return <NoteNavigationItems onback={props.onback} onsave={props.onsave}/>;
      default:
        return <NotesNavigationItems />;
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