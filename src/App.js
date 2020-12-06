import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NotesPage from './pages/NotesPage/NotesPage';
import NotePage from './pages/NotePage/NotePage';

class App extends Component {
  render(){
    return (
      <Router>
        <Switch>
          <Route path='/note'>
            <NotePage />
          </Route>
          <Route path="/">
            <NotesPage />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
