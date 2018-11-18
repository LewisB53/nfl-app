import React, {Component} from 'react';

import Player from './Player';
import PlayerList from './PlayerList'

let selectedPlayer =[]
let selectedPosition = "QB";

class NewPlayerSearch extends Component {

    constructor(props) {
      super(props);
      this.state = {value: '',
                   
                    newplayers:null, 
                    selectedPosition: "QB"
                  };
    }

handleClick(e, onClickPos) {
    e.preventDefault();
    // console.log(props.selectedPlayers[igKey].name);
 
 console.log(onClickPos);
    

    
    let selected = Object.keys( this.props.selectedPlayers )
        .map( igKey => {
            
            return [...Array( this.props.selectedPlayers[igKey] )].map( ( _, i ) => {
                // counter = counter + 1;
                // console.log(counter);
            //   console.log(Player)
          
            if(this.props.selectedPlayers[igKey].position === onClickPos)
                return <Player key={igKey + i} type={igKey}  
                name={this.props.selectedPlayers[igKey].name} 
                weekPts={this.props.selectedPlayers[igKey].weekPts} 
                position={this.props.selectedPlayers[igKey].position} 
                weekProjectedPts={this.props.selectedPlayers[igKey].weekProjectedPts} 
                
                />;

            } );
        } )
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    if (selected.length === 0) {
        selected = <p>Please add Some Players!</p>;
    }
    this.setState({
        newplayers: selected
      });
    
}

    render() {
    return (
        <div>
<p> </p>
<span onClick={(e) =>this.handleClick(e, "QB")}>[QB]  </span>
<span onClick={(e) =>this.handleClick(e,"WR") }>[WR] </span>
<span onClick={(e) =>this.handleClick(e,"TE")}>[TE] </span>
<span onClick={(e) =>this.handleClick(e, "K")}>[K] </span>
<span onClick={(e) =>this.handleClick(e, "DEF")}>[DEF] </span>
<p></p>


            {this.state.newplayers}
            
        </div>
    );
};
}


export default NewPlayerSearch;