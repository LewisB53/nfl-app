import React from 'react';

import Player from './Player';
import PlayerList from './PlayerList'


const selectedPlayer = ( props ) => {
    
    let selected = Object.keys( props.selectedPlayers )
        .map( igKey => {
            
            return [...Array( props.selectedPlayers[igKey] )].map( ( _, i ) => {
                // counter = counter + 1;
                // console.log(counter);
            //   console.log(Player)
          
            if(props.selectedPlayers[igKey].position === "QB")
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

            {selected}
            
        </div>
    );
};

export default selectedPlayer;