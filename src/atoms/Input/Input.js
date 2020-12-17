import React from 'react';

import classes from './Input.module.css';

const input = (props) => (
  <input className={classes.Input} value={props.value} placeholder={props.placeholder} onChange={e => props.onChange(e, props.type)}/>
);

export default input;