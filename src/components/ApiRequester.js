
import React, { Component } from 'react';
import axios from "axios";
import Player from './Player'
import PlayerList from './PlayerList'

class ApiRequester extends Component {
  // default State object

  state = {
    week: 2,
    players: [],
    selectedPlayers: []
  };

componentDidMount() {
  
    let weekNo =3

    axios.get("https://api.fantasy.nfl.com/v1/players/stats?statType=seasonStats&season=2018&week="+ weekNo + "&format=json")
    .then(response => {

        // create an playersay of players only with relevant data
        console.log("week " +weekNo +" stats" + response.data.players[213].weekPts);

        const players = response.data.players;

        var newplayers = players.map(function (playerObject) {
          return {
            id: playerObject.id,
            name: playerObject.name,
            weekPts: playerObject.weekPts
          }
        });

        // localStorage.setItem(newplayers[0].name, players.selectedPlayers);

        console.log("Found Players: " + newplayers[0].name )

        

        const roster = [newplayers[0]];

        // create a new "State" object without mutating 
        // the original State object. 
        const newState = Object.assign({}, this.state, {
          players: newplayers,
          selectedPlayers: roster
        
        });

        // store the new state object in the component's state
        this.setState(newState);
        console.log(newState);

      
      })
      .catch(error => console.log(error));

     
  }

  render() {
    return (
      <div >
        <Player players={this.state.players} />
        <PlayerList players={this.state.players} />

   

      </div>
    );
  }
}
  export default ApiRequester;