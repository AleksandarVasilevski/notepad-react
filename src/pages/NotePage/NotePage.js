import React, {Component} from 'react';

import Layout from '../../templates/Layout/Layout';
import Input from '../../atoms/Input/Input';

class NotePage extends Component {

  state = {
    title: '',
    description: ''
  }

  onBack = () => {
    console.log('back pressed');
  }

  onSave = () => {
    console.log('save pressed');
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
      <Layout onback={this.onBack} onsave={this.onSave}>
        <Input type='title' value={this.state.title} placeholder="Title" onChange={this.onChangeHandler}/>
        <Input type='description' value={this.state.description} placeholder="Description" onChange={this.onChangeHandler}/>
      </Layout>
    );
  }
}

export default NotePage;