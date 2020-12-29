const initialState = {
  notes:[]
}

const reducer = (state = initialState, action) => {
  if(action.type === 'CREATE'){
    return{
      ...state,
      notes: [...state.notes, action.note]
    }
  }
  return state;
}

export default reducer;