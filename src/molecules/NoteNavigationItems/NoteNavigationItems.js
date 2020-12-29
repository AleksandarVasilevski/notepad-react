import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faSave } from '@fortawesome/free-solid-svg-icons';

import classes from './NoteNavigationItems.module.css';

const noteNavigationItems = (props) => (
    <Fragment>
        <Link to='/notes'>
            <FontAwesomeIcon className={classes.FirstItem} icon={faSave} size="lg" onClick={props.onsave}/>
            <FontAwesomeIcon className={classes.LastItem} icon={faTrashAlt} size="lg" onClick={props.ondelete}/>
        </Link>
    </Fragment>
);

export default noteNavigationItems;