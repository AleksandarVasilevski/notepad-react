import * as actionTypes from './actionsTypes';

export const createNote = (note) => {
    return{
        type: actionTypes.CREATE_NOTE,
        note: note
    };
};