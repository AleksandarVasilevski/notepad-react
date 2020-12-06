import React, {Component} from 'react';

import Layout from '../../templates/Layout/Layout';
import Input from '../../atoms/Input/Input';

class NotePage extends Component{

  render(){
    return(
      <Layout>
        <Input type='title'/>
        <Input type='description'/>
      </Layout>
    )
  }
}

export default NotePage;