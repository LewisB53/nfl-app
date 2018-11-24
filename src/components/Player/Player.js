import React, {Component} from "react";
import './Player.css';
import PropTypes from "prop-types";
import ModalOpener from '../ModalOpener'


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


  render(){
  return (
    <div className="Player">
      <span>{this.props.name}</span>
      <span> Fantasy Points {this.props.weekPts} </span>
      <span> Projected Points {this.props.weekProjectedPts} </span>
      <ModalOpener 
                        name={this.props.name} 
                        weekPts={this.props.weekPts} 
                        position={this.props.position} 
                        weekProjectedPts={this.props.weekProjectedPts} 
                        ownedBy = {this.props.ownedBy}
                        />
    
{/* <ModalOpener>{this.state.newplayer} </ModalOpener>  */}

    </div>
  );
}

// Player.propTypes = {
//   name: PropTypes.string.isRequired
// };

}

export default Player;