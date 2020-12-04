import React, {Component} from 'react';

import Layout from '../../templates/Layout/Layout';
import Notes from '../../organisms/Notes/Notes';
import FloatingActionButton from '../../atoms/FloatingActionButton/FloatingActionButton';

class NotesPage extends Component{
  render(){
    return(
      <Layout>
        <Notes />
        <FloatingActionButton />
      </Layout>
    )
  }
}

export default NotesPage;