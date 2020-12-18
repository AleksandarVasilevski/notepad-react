import React, {Fragment} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSort } from '@fortawesome/free-solid-svg-icons';

import classes from './NotesNavigationItems.module.css';

const notesNavigationItems = () => (
    <Fragment>
        <FontAwesomeIcon className={classes.FirstItem} icon={faSearch} size="lg" />
        <FontAwesomeIcon className={classes.LastItem} icon={faSort} size="lg" />
    </Fragment>
);

export default notesNavigationItems;