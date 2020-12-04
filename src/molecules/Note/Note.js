import React from 'react';
import propTypes from 'prop-types';

import classes from './Note.module.css'

const note = (props) => (
  <div className={classes.Note}>
    <h2 className={classes.Title}>{props.title}</h2>
    <p className={classes.Description}>{props.description}</p>
    <p className={classes.TimeStamp}>{props.timeStamp}</p>
  </div>
);

note.propTypes = {
  title: propTypes.string,
  description: propTypes.string,
  timeStamp: propTypes.string.isRequired
}

export default note;