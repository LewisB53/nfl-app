import React, {Component} from "react";

// import the Contact component
import Player from "../components/Player/Player";


class PlayerSearch extends Component {


  constructor(props) {
    super(props);
    this.state = {value: '',
                  newplayers:null, 
                  selectedPosition: "QB",
                  roster: [5,6,7,8]
                };
  }

handleChange(e) {
  
  this.setState({value: e.target.value});
}


handleSubmit(e) {
  e.preventDefault();
  // console.log(props.selectedPlayers[igKey].name);
  //  console.log(onClickPos);
  
  let selected = Object.keys( this.props.selectedPlayers )
      .map( igKey => {
          
          return [...Array( this.props.selectedPlayers[igKey] )].map( ( _, i ) => {
        
          if(this.props.selectedPlayers[igKey].name.includes(this.state.value))
              return <Player key={igKey + i} type={igKey}  
                        arrayNo = {igKey}
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
  }
  this.setState({
      newplayers: selected
    });
 
}
update(updatedRoster){
    console.log("got something");
    this.setState({roster: updatedRoster});
}


  render() {

  return (
      <div>
        <p> Search By Name</p>

        <form onClick={(e) =>this.handleSubmit(e)}>
            <label>
                Name:
                <input type="text" value={this.state.value} onChange={(e) =>this.handleChange(e)}/>
            </label>
            <input type="submit" value="Submit" />
        </form>

        <p></p>
        
        {this.state.newplayers}
          
      </div>
  );
};
}


export default PlayerSearch;