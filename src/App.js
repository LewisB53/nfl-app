import React, { Component } from 'react';
import "./App.css";
import axios from "axios";

import ContactList from "./components/ContactList";

const contacts = [
  { id: 1, name: "Leanne Graham" },
  { id: 2, name: "Ervin Howell" },
  { id: 3, name: "Clementine Bauch" },
  { id: 4, name: "Patricia Lebsack" }
];

class App extends Component {

  // default State object
  state = {
    contacts: []
  };

  componentDidMount() {
    axios
      .get("http://api.fantasy.nfl.com/v1/players/stats?statType=seasonStats&season=2018&week=1&format=json")
      .then(response => {

        // create an array of contacts only with relevant data
        console.log(response.data);

        const wholeobject = response.data;
        const findOnePlayer = wholeobject.players[213];
        console.log(findOnePlayer.name);
        console.log(findOnePlayer.weekPts);
        console.log(findOnePlayer.position);
        console.log(findOnePlayer.stats);



        // const playersArray = wholeobject.players;

        // const newContacts = playersArray

        // const newContacts = response.data.players.map(c => {
        //   return {
        //     id: c.id,
        //     name: c.name
        //   };
        // });

        // create a new "State" object without mutating 
        // the original State object. 
        const newState = Object.assign({}, this.state, {
          contacts: newContacts
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

        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;