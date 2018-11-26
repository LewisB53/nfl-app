import React, {Component} from 'react';
import Player from "../components/Player/Player";
import Auxx from '../hoc/Auxx/Auxx'
import ModalOpener from './ModalOpener';
import classes from './Player/Modal.css';


class SearchByPosition extends Component {

    constructor(props) {
      super(props);
      this.state = {value: '',
                   roster: [1,2,3,4],
                    newplayers:null, 
                    selectedPosition: "QB"
                  };
    }

handleClick(e, onClickPos) {
    e.preventDefault();
    // console.log(props.selectedPlayers[igKey].name);
    //  console.log(onClickPos);
    
    let selected = Object.keys( this.props.selectedPlayers )
        .map( igKey => {
            
            return [...Array( this.props.selectedPlayers[igKey] )].map( ( _, i ) => {
          
            if(this.props.selectedPlayers[igKey].position === onClickPos)
                return <Player key={igKey + i} type={igKey}  
                            name={this.props.selectedPlayers[igKey].name} 
                            weekPts={this.props.selectedPlayers[igKey].weekPts} 
                            position={this.props.selectedPlayers[igKey].position} 
                            weekProjectedPts={this.props.selectedPlayers[igKey].weekProjectedPts} 
                            ownedBy={this.props.selectedPlayers[igKey].ownedBy} 
                        />

            } );
        } )

        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    if (selected.length === 0) {
        selected = <p>Please add Some Players!</p>;
        return selected;
    }
    this.setState({
        newplayers: selected
      });
    
}

    render() {
    return (
        <div>
<p> Filter By Position</p>
<span onClick={(e) =>this.handleClick(e, "QB")}>[QB]  </span>
<span onClick={(e) =>this.handleClick(e,"WR") }>[WR] </span>
<span onClick={(e) =>this.handleClick(e,"TE")}>[TE] </span>
<span onClick={(e) =>this.handleClick(e, "K")}>[K] </span>
<span onClick={(e) =>this.handleClick(e, "DEF")}>[DEF] </span>
<p></p>


            {this.state.newplayers}
            {this.state.roster}

            
        </div>
    );
};
}


export default SearchByPosition;