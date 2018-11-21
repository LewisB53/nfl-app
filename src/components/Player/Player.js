import React, {Component} from "react";
import './Player.css';
import PropTypes from "prop-types";
import ModalOpener from "../ModalOpener";



class Player extends Component {

constructor(props) {
  super(props)

    this.state = {
      isModalOpen: true
    }
  }


  render(){
  return (
    <div className="Player" onClick={this.openModal}>

      <span>{this.props.name}</span>
      <li> Fantasy Points {this.props.weekPts} </li>
      <li> Projected Points {this.props.weekProjectedPts} </li>
      <li></li>
<ModalOpener></ModalOpener>
    </div>
  );
}

// Player.propTypes = {
//   name: PropTypes.string.isRequired
// };

}

export default Player;