import React, {Component} from 'react';

import Layout from '../../templates/Layout/Layout';
import Notes from '../../organisms/Notes/Notes';
import FloatingActionButton from '../../atoms/FloatingActionButton/FloatingActionButton';

class NotesPage extends Component{

  state = {
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

  render(){
    return(
      <Layout>
        <Notes notes={this.state.notes}/>
        <FloatingActionButton />
      </Layout>
    )
  }
}

export default NotesPage;