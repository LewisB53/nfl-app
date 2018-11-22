import React, {Component} from "react";
import './Player.css';
import PropTypes from "prop-types";


class Player extends Component {

constructor(props) {
  super(props)

    this.state = {
      isModalOpen: true,
      newPlayer: null
    }
  }

componentDidMount(){

  this.setState({

  });
  console.log(" and the winner is" + this.state.singleplayer )
}

  render(){
  return (
    <div className="Player">
      <span>{this.props.name}</span>
      <span> Fantasy Points {this.props.weekPts} </span>
      <span> Projected Points {this.props.weekProjectedPts} </span>
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