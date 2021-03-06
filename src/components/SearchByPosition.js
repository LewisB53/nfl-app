import React, {Component} from 'react';
import Player from "../components/Player/Player";


class SearchByPosition extends Component {

    constructor(props) {
      super(props);
      this.state = {value: '',
                    newplayers:null, 
                    selectedPosition: "QB"
                  };
    }

handleClick(e, onClickPos) {
    e.preventDefault();
    
    let selected = Object.keys( this.props.selectedPlayers )
        .map( igKey => {
            
            return [...Array( this.props.selectedPlayers[igKey] )].map( ( _, i ) => {
          
            if(this.props.selectedPlayers[igKey].position === onClickPos)
                return <Player key={igKey + i} type={igKey} 
                            arrayNo = {igKey} 
                            id={this.props.selectedPlayers[igKey].id} 
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

            
        </div>
    );
};
}


export default SearchByPosition;