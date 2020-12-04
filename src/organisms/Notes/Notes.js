import React from 'react';
import propTypes from 'prop-types';

import classes from './Notes.module.css';
import Note from '../../molecules/Note/Note';

const notes = (props) => (
  <div className={classes.Notes}>
    {props.notes.map(note => {
      return(
        <Note key={note.id} title={note.title} description={note.description} timeStamp={note.timeStamp}/>
      )
    })}
  </div>
);

notes.propTypes = {
  notes: propTypes.array
}

export default notes;

