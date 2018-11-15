import React from "react";

// import the Contact component
import Player from "./Player";


function Roster(props) {
  return (
    <div> Your Roster
      {props.players.map(c => <Player key={c.id} name={c.name} weekPts={c.weekPts}/>)}
     </div> 
  ); 
} 

export default Roster;
