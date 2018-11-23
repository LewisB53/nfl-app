import React, {Component} from 'react';
import Player from "../components/Player/Player";
import Auxx from '../hoc/Auxx/Auxx'
import ModalOpener from './ModalOpener';
import classes from './Player/Modal.css';


class Roster extends Component {

    constructor(props) {
      super(props);
      this.state = {value: '',
                   
                    newplayers:null, 
                    selectedPosition: "QB"
                  };
    }

handleClick(e, userSelected) {
    e.preventDefault();
    // console.log(props.selectedPlayers[igKey].name);
    //  console.log(onClickPos);
    
    let selected = Object.keys( this.props.selectedPlayers )
        .map( igKey => {
            
            return [...Array( this.props.selectedPlayers[igKey] )].map( ( _, i ) => {
          
            if(this.props.selectedPlayers[igKey].ownedBy === userSelected)
                return <Auxx>
                            <Player key={igKey + i} type={igKey}  
                                name={this.props.selectedPlayers[igKey].name} 
                                weekPts={this.props.selectedPlayers[igKey].weekPts} 
                                position={this.props.selectedPlayers[igKey].position} 
                                weekProjectedPts={this.props.selectedPlayers[igKey].weekProjectedPts} 
                            />

                            <ModalOpener  className={classes.Modal}
                            style={{
                                transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                                opacity: this.props.show ? '1' : '0'
                            }}

                            key={igKey + i + 1 } type={igKey}  
                            name={this.props.selectedPlayers[igKey].name} 
                            weekPts={this.props.selectedPlayers[igKey].weekPts} 
                            position={this.props.selectedPlayers[igKey].position} 
                            weekProjectedPts={this.props.selectedPlayers[igKey].weekProjectedPts} 
                            />
                </Auxx>
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
<p> User Teams</p>
<span onClick={(e) =>this.handleClick(e, "Lewis")}>[Lewis]  </span>
<span onClick={(e) =>this.handleClick(e,"Bill") }>[Bill] </span>
<span onClick={(e) =>this.handleClick(e,"Maurice")}>[Maurice] </span>
<span onClick={(e) =>this.handleClick(e, "Callum")}>[Callum] </span>
<span onClick={(e) =>this.handleClick(e, "Ewan")}>[Ewan] </span>
<span onClick={(e) =>this.handleClick(e, "Rachel")}>[Rachel] </span>

<p></p>


            {this.state.newplayers}
            
        </div>
    );
};
}


export default Roster;