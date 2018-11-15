import React, { Component } from 'react';
import "./App.css";

import PlayerList from "./components/PlayerList";
import Roster from "./components/Roster";
import StatsToDate from './components/StatsToDate';


class App extends Component {

  // default State object
  state = {
    week: 2,
    players: [],
    selectedPlayers: []
  };


  render() {
    return (
      <div className="App">

        <PlayerList players={this.state.players} />
        <Roster players={this.state.selectedPlayers} />

      </div>
    );
  }
}

export default App;