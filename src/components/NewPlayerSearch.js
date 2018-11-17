import React from 'react';

import Player from './Player';
import PlayerList from './PlayerList'

const selectedPlayer = ( props ) => {
    let transformedIngredients = Object.keys( props.selectedPlayers )
        .map( igKey => {
            return [...Array( props.selectedPlayers[igKey] )].map( ( _, i ) => {
            //   console.log(Player)
            if(props.selectedPlayers[igKey].name === "Derek Carr")
                return <Player key={igKey + i} type={igKey}  name={props.selectedPlayers[igKey].name} weekPts={3}/>;

            } );
        } )
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please add Some Players!</p>;
    }
    return (
        <div >
         
            {transformedIngredients}
            
        </div>
    );
};

export default selectedPlayer;