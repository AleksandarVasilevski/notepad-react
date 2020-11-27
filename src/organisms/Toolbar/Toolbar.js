import React from 'react';

import classes from './Toolbar.module.css';

const toolbar = (props) => {
  return(
    <header className={classes.Toolbar}>
      <div>Logo</div>
      <nav>Navigation Items</nav>
    </header>
  );
}

export default toolbar;