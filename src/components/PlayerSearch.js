import React, {Component} from "react";

// import the Contact component
import Player from "./Player";


let aboveClass = [];

class PlayerSearch extends Component {

  constructor(props) {
    super(props);
    this.state = {value: '',
                  selected: {},
                  newplayers:[], 
                  index: 0
                };


    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value
     
    });
    console.log("props before submit" + this.props);
  }

  handleSubmit(event,newplayers) {

    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
 
    console.log("on submit you found const above class" + aboveClass);

    aboveClass = this.props.selected.filter(c => { 
      if (c.name === this.state.value) 
      return { 
          id: c.id, 
          name: c.name, 
          weekPts: c.weekPts,
          
        
      }; 
    
      this.setState({
        newplayers: aboveClass
      });
      return newplayers;
    }); 
    const playerData = Object.keys( aboveClass ) .map( igKey => {
      return playerData[igKey];
  } )
 

    console.log("This IS the player objst found" + playerData );

  
    
    
    
    console.log("this is the state" + this.state.newplayers);
    console.log("player object" + this.state.selected[0]);
    console.log("whole player list" + this.props.selected)

  return newplayers
  }
   
  
  

  render() {
    
  return (
    <div>         
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      
      <p>Found Player: VALUE FROM TEXT BOX HERE {this.state.value}</p>
      {this.props.selected.map(c => <Player key={c.id} name={c.name} weekPts={c.weekPts} index={c.index}/>)}
      

      Here is the state:  {this.state.newplayers[0]}
     
     

    
     </div> 
  ); 
} 
}


export default PlayerSearch;