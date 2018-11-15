
import React, { Component } from 'react';
import axios from "axios";

class ApiRequester extends Component {

componentDidMount(cachedName) {
    console.log(cachedName)
    let weekNo =3

    axios.get("http://api.fantasy.nfl.com/v1/players/stats?statType=seasonStats&season=2018&week="+ weekNo + "&format=json")
    .then(response => {

        // create an playersay of players only with relevant data
        console.log("week " +weekNo +" stats" + response.data.players[213].weekPts);

        const players = response.data.players;

        var newplayers = players.filter(function (playerObject) {
          return playerObject.name === cachedName;
        });

        localStorage.setItem(newplayers[0].name, players.selectedPlayers);

        console.log("Found Players: " + newplayers[0].name )

        

        const roster = [newplayers[0]];

        // create a new "State" object without mutating 
        // the original State object. 
        const newState = Object.assign({}, this.state, {
          players: newplayers,
          selectedPlayers: roster,
          week: weekNo
        });

        // store the new state object in the component's state
        this.setState(newState);
        console.log(newState);

      
      })
      .catch(error => console.log(error));

      weekNo++
    

      axios.get("http://api.fantasy.nfl.com/v1/players/stats?statType=seasonStats&season=2018&week="+ weekNo + "&format=json")
      .then(response => {
        
        const newWeek = response.data.players;
          // create an playersay of players only with relevant data
          console.log("week " +weekNo +" stats" + newWeek[213].weekPts);
      })
  }

}
  export default ApiRequester;