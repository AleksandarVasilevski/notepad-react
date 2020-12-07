import React, {Component} from 'react';

import Layout from '../../templates/Layout/Layout';
import Input from '../../atoms/Input/Input';

class NotePage extends Component{

  render(){
    return(
      <Layout>
        <Input type='title' value='Title'/>
        <Input type='description' value='Description'/>
      </Layout>
    );
  }
}

export default NotePage;