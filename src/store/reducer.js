const initialState = {
  notes:[]
}

const reducer = (state = initialState, action) => {
  if(action.type === 'CREATE'){
    return{
      ...state,
      // notes: [...state.notes, action.note]
      notes: state.notes.concat({id: state.notes.length, title: action.note.title, description: action.note.description, timeStamp: action.note.timeStamp})
    }
  }else if(action.type === 'EDIT'){
    return{

    }
  }else if(action.type === 'DELETE'){
    return{

    }
  }
  return state;
}

export default reducer;