import React, {Fragment} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faBackward } from '@fortawesome/free-solid-svg-icons';

import classes from './NoteNavigationItems.module.css';

const noteNavigationItems = () => (
    <Fragment>
        <FontAwesomeIcon className={classes.FirstItem} icon={faBackward} size="lg" />
        <FontAwesomeIcon className={classes.LastItem} icon={faSave} size="lg" />
    </Fragment>
);

export default noteNavigationItems;