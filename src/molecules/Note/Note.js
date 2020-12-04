import React from 'react';

import classes from './Note.module.css'

const note = () => (
  <div className={classes.Note}>
    <h2 className={classes.Title}>Title</h2>
    <p className={classes.Description}>Short note...</p>
    <p className={classes.TimeStamp}>02.09.2020, 16:00</p>
  </div>
);

export default note;