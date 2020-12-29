const initialState = {
  notes:[
    {
      id: 0,
      title: 'Note 1',
      description: 'Description',
      timeStamp: '02.09.2020, 16:00'
    },
    {
      id: 1,
      title: 'Note 2',
      description: 'Description',
      timeStamp: '02.09.2020, 16:00'
    },
    {
      id: 2,
      title: 'Note 3',
      description: 'Description',
      timeStamp: '02.09.2020, 16:00'
    }
  ]
}

const reducer = (state = initialState, action) => {
  console.log(action)
  if(action.type === 'CREATE'){
    return{
      ...state,
      notes: [...state.notes, action.note]
    }
  }
  console.log(initialState)
  return state;
}

export default reducer;