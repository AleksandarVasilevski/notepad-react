import React, {Component} from 'react';
import { connect } from 'react-redux';

import Layout from '../../templates/Layout/Layout';
import Input from '../../atoms/Input/Input';
import * as actionCreators from '../../store/actions/index';

class NotePage extends Component {

  state = {
    id: Math.floor(Math.random() * 10000),
    title: '',
    description: '',
    timeStamp: new Date(),
  }

  onSave = () => {
    this.props.onNoteCreate(this.state);
    console.log('save pressed');
  }

  onDelete = () => {
    console.log('delete pressed');
  }

  onChangeHandler = (e, type) => {
    if(type === 'title'){
      this.setState({title: e.target.value});
    }else{
      this.setState({description: e.target.value});
    }
  }

  render(){
    return(
      <Layout onsave={this.onSave} ondelete={this.onDelete}>
        <Input type='title' value={this.state.title} placeholder="Title" onChange={this.onChangeHandler}/>
        <Input type='description' value={this.state.description} placeholder="Description" onChange={this.onChangeHandler}/>
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return{
    onNoteCreate: (note) => dispatch(actionCreators.createNote(note))
  }
}

export default connect(null, mapDispatchToProps)(NotePage);