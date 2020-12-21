import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faBackward } from '@fortawesome/free-solid-svg-icons';

import classes from './NoteNavigationItems.module.css';

const noteNavigationItems = (props) => (
    <Fragment>
        <Link to='/notes'>
            <FontAwesomeIcon className={classes.FirstItem} icon={faBackward} size="lg" onClick={props.onback}/>
        </Link>
        <FontAwesomeIcon className={classes.LastItem} icon={faSave} size="lg" onClick={props.onsave}/>
    </Fragment>
);

export default noteNavigationItems;