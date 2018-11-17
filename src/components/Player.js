import React from "react";
import PropTypes from "prop-types";

function Player(props) {
  return (
    <div className="Player">
      <span>{props.name}</span>
      <span> Fantasy Points {props.weekPts} </span>
      <span> index {props.index} </span>

    </div>
  );
}

Player.propTypes = {
  name: PropTypes.string.isRequired

};

export default Player;