import React, {Component} from 'react';
import { Link } from "react-router-dom";

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

  componentDidUpdate(){
    console.log(this.state.notes);
  }

  addNote = () => {
    let notes = [...this.state.notes];
    let newNote = {id: notes.length + 1, title: 'New Note', description: 'Description', timeStamp: '02.09.2020, 16:00'};
    notes.push(newNote);
    this.setState({notes: notes});
  }

  fabClickHandler =() => {
    
    //For testing
    // this.addNote(); 
  }

  render(){
    return(
      <Layout>
        <Notes notes={this.state.notes}/>
        <Link to="/note">
          <FloatingActionButton onclick={this.fabClickHandler}/>
        </Link>
      </Layout>
    )
  }
}

export default NotesPage;