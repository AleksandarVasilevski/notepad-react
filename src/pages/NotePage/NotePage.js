import React, {Component} from 'react';
import { connect } from 'react-redux';

import Layout from '../../templates/Layout/Layout';
import Input from '../../atoms/Input/Input';

class NotePage extends Component {

  state = {
    id: '',
    title: '',
    description: '',
    timeStamp: ''
  }

  onSave = () => {
    this.props.onNoteCreate(this.state);
    console.log('save pressed');
  }

  onDelete = () => {
    console.log('back pressed');
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
    onNoteCreate: (note) => dispatch({type: 'CREATE', note: note})
  }
}

export default connect(null, mapDispatchToProps)(NotePage);