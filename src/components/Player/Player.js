import React, {Component} from "react";
import './Player.css';
import PropTypes from "prop-types";
import PlayerModal from './PlayerModal'



class Player extends Component {

constructor(props) {
  super(props)

    this.state = {
      isModalOpen: true
    }
  }


  handleClick(e) {
    e.preventDefault();
    
    console.log("clicked");
    
  }
  render(){
  return (
    <div className="Player" onClick={this.openModal}>

      <span>{this.props.name}</span>
      <li> Fantasy Points {this.props.weekPts} </li>
      <li> Projected Points {this.props.weekProjectedPts} </li>
      <li></li>

    </div>
  );
}

// Player.propTypes = {
//   name: PropTypes.string.isRequired
// };

}

export default Player;