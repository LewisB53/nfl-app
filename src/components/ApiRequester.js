
import React, { Component } from 'react';
import axios from "axios";
import PlayerList from './PlayerList'
import PlayerSearch from './PlayerSearch';
import SearchByPosition from './SearchByPosition';
import Roster from './Roster';

import ModalOpener from './ModalOpener';

class ApiRequester extends Component {
  // default State object

  state = {
    week:10,
    players: [],
    selectedPlayers: [],
    roster: [1,2,3,4],
    ownedBy: null
  };

componentDidMount() {


    axios.get("https://api.fantasy.nfl.com/v1/players/stats?statType=seasonStats&season=2018&week="+ this.state.week + "&format=json")
    .then(response => {

        const players = response.data.players;
        console.log(players);
        var newplayers = players.map(function (playerObject, index) {
          // console.log("This is the index" + index)
          return {
            ownedBy:"No Team",
            key:index,
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

        // localStorage.setItem(newplayers[0].name, players.selectedPlayers);
       
        console.log("Found Players: " + newplayers[0].name )

        

        let roster = [newplayers[0], newplayers[2], newplayers[3],newplayers[4],newplayers[6]]
        
        
        ;

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
        {/* <Player players={this.state.players} /> */}
        <PlayerList players={this.state.players} />
        <SearchByPosition selectedPlayers={this.state.players} />
        <PlayerSearch selectedPlayers={this.state.players} />
        <Roster selectedPlayers={this.state.players} />
     
{this.roster}
        


      </div>
    );
  }

}
  export default ApiRequester;