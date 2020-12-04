import React from 'react';

import classes from './Notes.module.css';
import Note from '../../molecules/Note/Note';

const notes = () => (
  <div className={classes.Notes}>
    <Note/>
    <Note/>
    <Note/>
    <Note/>
  </div>
);

export default notes;

