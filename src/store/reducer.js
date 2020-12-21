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
    return state;
}

export default reducer;