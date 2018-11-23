import React, {Component} from "react";
import './Player.css';
import PropTypes from "prop-types";


class Player extends Component {

constructor(props) {
  super(props)

    this.state = {
      isModalOpen: true,
      newPlayer: null,
      ownedBy: props.ownedBy
    }
  }

componentDidMount(){

  this.setState({

  });
  console.log(" and the winner is" + this.state.singleplayer )
}

addPlayer() {
 this.setState({ ownedBy: "Lewis" })
  
}

  render(){
  return (
    <div className="Player">
    <button onClick={() => this.addPlayer()}>Add Player to roster</button>
      <span>{this.props.name}</span>
      <span> Fantasy Points {this.props.weekPts} </span>
      <span> Projected Points {this.props.weekProjectedPts} </span>
      <span> owned By {this.state.ownedBy} </span>

      <span></span>
{/* <ModalOpener>{this.state.newplayer} </ModalOpener>  */}

    </div>
  );
}

// Player.propTypes = {
//   name: PropTypes.string.isRequired
// };

}

export default Player;