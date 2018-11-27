import React, {Component} from "react";
import './Player.css';
import PropTypes from "prop-types";
import ModalOpener from '../ModalOpener'
import Roster from '../Roster'


class Player extends Component {

constructor(props) {
  super(props)

    this.state = {
      isModalOpen: true,
      player: null,
      ownedBy: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

componentDidMount(){
console.log(this.props)
 
}


  render(){
  return (
    <div className="Player">
      <span>{this.props.name}</span>
      <span> Fantasy Points {this.props.weekPts} </span>
      <span> Projected Points {this.props.weekProjectedPts} {this.props.key}</span>
      <ModalOpener  handleClick={this.handleClick} 
                        name={this.props.name} 
                        key={this.props.key} 

                        weekPts={this.props.weekPts} 
                        position={this.props.position} 
                        weekProjectedPts={this.props.weekProjectedPts} 
                        ownedBy = {this.state.ownedBy}
                        />
                       
    

    </div>
  );
}

handleClick() {

  localStorage.setItem('ownedPlayer Key', this.props.arrayNo);
  this.setState({
      ownedBy: "Vegas Vigilantes"
  });
  console.log(this.state.ownedBy)
}

// Player.propTypes = {
//   name: PropTypes.string.isRequired
// };

}

export default Player;