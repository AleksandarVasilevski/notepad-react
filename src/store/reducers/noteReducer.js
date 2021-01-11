import * as actionTypes from '../actions';

const initialState = {
  notes:[]
}

const reducer = (state = initialState, action) => {
  if(action.type === actionTypes.CREATE_NOTE){
    return{
      ...state,
      // notes: [...state.notes, action.note]
      notes: state.notes.concat({id: state.notes.length, title: action.note.title, description: action.note.description, timeStamp: action.note.timeStamp})
    }
  }else if(action.type === actionTypes.UPDATE_NOTE){
    return{

    }
  }else if(action.type === actionTypes.DELETE_NOTE){
    return{

    }
  }
  return state;
}

export default reducer;