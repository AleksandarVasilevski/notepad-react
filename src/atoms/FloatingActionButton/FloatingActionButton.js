import React from 'react';

import classes from './FloatingActionButton.module.css';

const floatingActionButton = (props) => (
  <button className={classes.FloatingActionButton} onClick={props.onclick}>+</button>
);

export default floatingActionButton;