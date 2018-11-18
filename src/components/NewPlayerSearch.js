import React from 'react';

import Player from './Player';
import PlayerList from './PlayerList'

function handleClick(e) {
    e.preventDefault();
    console.log("clicked");
    // console.log(props.selectedPlayers[igKey].name);
    
  }

let selectedPosition = "QB";
const selectedPlayer = ( props ) => {
    
    let selected = Object.keys( props.selectedPlayers )
        .map( igKey => {
            
            return [...Array( props.selectedPlayers[igKey] )].map( ( _, i ) => {
                // counter = counter + 1;
                // console.log(counter);
            //   console.log(Player)
          
            if(props.selectedPlayers[igKey].position === selectedPosition)
                return <Player key={igKey + i} type={igKey}  
                name={props.selectedPlayers[igKey].name} 
                weekPts={props.selectedPlayers[igKey].weekPts} 
                position={props.selectedPlayers[igKey].position} 
                weekProjectedPts={props.selectedPlayers[igKey].weekProjectedPts} 
                
                />;

            } );
        } )
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    if (selected.length === 0) {
        selected = <p>Please add Some Players!</p>;
    }


    return (
        <div>
<p onClick={handleClick} >Click me </p>
<span onClick={handleClick}>[QB]  </span>
<span  onClick={handleClick}>[WR] </span>
<span onClick={handleClick}>[TE] </span>
<span onClick={handleClick}>[K] </span>
<span onClick={handleClick}>[DEF] </span>
<p></p>


            {selected}
            
        </div>
    );
};

export default selectedPlayer;