import React, {Fragment} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faBackward } from '@fortawesome/free-solid-svg-icons';

import classes from './NoteNavigationItems.module.css';

const noteNavigationItems = (props) => (
    <Fragment>
        <FontAwesomeIcon className={classes.FirstItem} icon={faBackward} size="lg" onClick={props.onback}/>
        <FontAwesomeIcon className={classes.LastItem} icon={faSave} size="lg" onClick={props.onsave}/>
    </Fragment>
);

export default noteNavigationItems;