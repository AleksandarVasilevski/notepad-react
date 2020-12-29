import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from '../../templates/Layout/Layout';
import Notes from '../../organisms/Notes/Notes';
import FloatingActionButton from '../../atoms/FloatingActionButton/FloatingActionButton';

class NotesPage extends Component{

  componentDidUpdate(){
    console.log(this.props);
  }

  fabClickHandler = () => {
    
    //For testing
    // this.addNote(); 
  }

  render(){
    return(
      <Layout>
        <Notes notes={this.props.notes}/>
        <Link to='/note'>
          <FloatingActionButton onclick={this.fabClickHandler}/>
        </Link>
      </Layout>
    )
  }
}

const mapStateToProps = state => {
  return{
    notes: state.notes
  };
};

export default connect(mapStateToProps)(NotesPage);