import React from 'react';

import classes from './Notes.module.css';
import Note from '../../molecules/Note/Note';

const notes = () => (
  <div className={classes.Notes}>
    <Note title="Title" description="Short note..." timeStamp="02.09.2020, 16:00"/>
    <Note title="Title" description="Short note..." timeStamp="02.09.2020, 16:00"/>
    <Note title="Title" description="Short note..." timeStamp="02.09.2020, 16:00"/>
    <Note title="Title" description="Short note..." timeStamp="02.09.2020, 16:00"/>
  </div>
);

export default notes;

