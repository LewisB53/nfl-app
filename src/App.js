import React, { Component } from 'react';
import './App.css';
import Main from './containers/Main';
import {Route, Switch} from 'react-router-dom';
import Roster from './components/Roster'



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Switch>
          <Route path = "/main" component={Main} />
          <Route path = "/" exact component={Roster} />
        </Switch>
           
        </header>
      </div>
    );
  }
}

export default App;
