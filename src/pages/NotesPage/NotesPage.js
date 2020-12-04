import React, {Component} from 'react';

import Layout from '../../templates/Layout/Layout';
import Notes from '../../organisms/Notes/Notes';

class NotesPage extends Component{
  render(){
    return(
      <Layout>
        <Notes />
      </Layout>
    )
  }
}

export default NotesPage;