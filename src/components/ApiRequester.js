
import React, { Component } from 'react';
import axios from "axios";
import PlayerSearch from './PlayerSearch';
import SearchByPosition from './SearchByPosition';
import Roster from './Roster';

class ApiRequester extends Component {
  // default State object

  state = {
    week:10,
    players: [],
  };

componentDidMount() {


    axios.get("https://api.fantasy.nfl.com/v1/players/stats?statType=seasonStats&season=2018&week="+ this.state.week + "&format=json")
    .then(response => {

        const players = response.data.players;
        var newplayers = players.map(function (playerObject, index) {

          return {
            ownedBy:"No Team",
            id: playerObject.id,
            name: playerObject.name,
            position: playerObject.position,
            seasonProjectedPts: playerObject.seasonProjectedPts,
            seasonPts: playerObject.seasonPts,
            stats: playerObject.stats,
            teamAbbr:playerObject.teamAbbr,
            weekProjectedPts:playerObject.weekProjectedPts,
            weekPts: playerObject.weekPts,
           
          }
        });

        // create a new "State" object without mutating 
        // the original State object. 
        const newState = Object.assign({}, this.state, {
          players: newplayers,
        
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
        {/* <Player players={this.state.players} /> */}
        <SearchByPosition selectedPlayers={this.state.players} />
        <PlayerSearch selectedPlayers={this.state.players} />
        <Roster selectedPlayers={this.state.players} />
     

      </div>
    );
  }

}
  export default ApiRequester;