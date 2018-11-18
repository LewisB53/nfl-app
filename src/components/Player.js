import React from "react";
import PropTypes from "prop-types";

function Player(props) {

  function handleClick(e) {
    e.preventDefault();
    console.log(props.weekPts);
    // console.log(props.selectedPlayers[igKey].name);
    
  }

  return (
    <div className="Player" onClick={handleClick}>
      <span>{props.name}</span>
      <li> Fantasy Points {props.weekPts} </li>
      <li> Projected Points {props.weekProjectedPts} </li>
      <li></li>

    </div>
  );
}

Player.propTypes = {
  name: PropTypes.string.isRequired

};

export default Player;