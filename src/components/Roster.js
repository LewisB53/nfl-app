import React, {Component} from 'react';


class Roster extends Component {

  constructor(props) {
    super(props)
    this.state ={
                roster: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
                newplayers: null
            }
  }

    render(){
        return (
          <div className="Player">
          <h1>Select Position</h1>
          <li onClick={() => this.selected(0)}> QB {this.state.roster[0]} </li>
          <li onClick={() => this.selected(1)}> RB {this.state.roster[1]} </li>
          <li onClick={() => this.selected(2)}>RB {this.state.roster[2]}</li>
          <li onClick={() => this.selected(3)}>WR {this.state.roster[3]}</li>
          <li onClick={() => this.selected(4)}>WR {this.state.roster[4]}</li>
          <li onClick={() => this.selected(5)}>TE {this.state.roster[5]}</li>
          <li onClick={() => this.selected(6)}>RB/WR {this.state.roster[6]}</li>
          <li onClick={() => this.selected(7)}>K {this.state.roster[7]}</li>
          <li onClick={() => this.selected(8)}>DEF {this.state.roster[8]}</li>
          <li onClick={() => this.selected(9)}> {this.state.roster[9]}</li>
          <li onClick={() => this.selected(10)}>Bench: {this.state.roster[10]}</li>
          <li onClick={() => this.selected(11)}>Player {this.state.roster[11]}</li>
          <li onClick={() => this.selected(12)}>Player {this.state.roster[12]}</li>
          <li onClick={() => this.selected(13)}>Player {this.state.roster[13]}</li>
          <li onClick={() => this.selected(14)}>Player {this.state.roster[14]}</li>

            {this.props.playerKey}
          </div>
        );
      }

      selected(arrayNumber){
        let updatedRoster = this.state.roster
        let onClickPos = localStorage.getItem('ownedPlayer Key')
        
        updatedRoster.forEach((element) => {
          console.log(element);
      });
      
      var i;
for (i = 0; i < updatedRoster.length; i++) { 

        if(updatedRoster[arrayNumber] === null){
           updatedRoster[arrayNumber] = this.props.selectedPlayers[onClickPos].name 
        }
         
          else if(updatedRoster[arrayNumber] !== null)
          console.log("Player already in this slot")

          this.setState({ roster: updatedRoster })
}
    



      }
}


export default Roster;