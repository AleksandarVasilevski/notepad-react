import React, {Component} from 'react';

import Layout from '../../templates/Layout/Layout';
import Input from '../../atoms/Input/Input';

class NotePage extends Component {

  state = {
    title: 'Title',
    description: 'Description'
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
      <Layout>
        <Input type='title' value={this.state.title} onChange={this.onChangeHandler}/>
        <Input type='description' value={this.state.description} onChange={this.onChangeHandler}/>
      </Layout>
    );
  }
}

export default NotePage;