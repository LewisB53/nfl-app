import React, { Component } from 'react';
import "./App.css";
import axios from "axios";

import PlayerList from "./components/PlayerList";

class App extends Component {

  // default State object
  state = {
    players: []
  };

  componentDidMount() {
    axios
      .get("http://api.fantasy.nfl.com/v1/players/stats?statType=seasonStats&season=2018&week=1&format=json")
      .then(response => {

        // create an playersay of players only with relevant data
        console.log(response.data);

        const players = response.data.players;
        
  
   

        // console.log(players[213].name);
        // console.log(players.weekPts);
        // console.log(players.position);
        // console.log(players.stats);

      


       

     

        const newplayers = players.map(c => {
          return {
          
            id: c.id,
            name: c.name,
            weekPts: c.weekPts
          };
        });

        // create a new "State" object without mutating 
        // the original State object. 
        const newState = Object.assign({}, this.state, {
          players: newplayers
        });

        // store the new state object in the component's state
        this.setState(newState);
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        
        ...

        <PlayerList players={this.state.players} />
      </div>
    );
  }
}

export default App;