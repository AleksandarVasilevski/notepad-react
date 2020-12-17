import React, {Component, Fragment} from 'react';

import classes from './Layout.module.css';
import Toolbar from '../../organisms/Toolbar/Toolbar';

class Layout extends Component {

  render(){
    return(
      <Fragment>
        <Toolbar onback={this.props.onback} onsave={this.props.onsave}/>
        <main className={classes.Layout}>{this.props.children}</main>
      </Fragment>
    );
  }
}

export default Layout;