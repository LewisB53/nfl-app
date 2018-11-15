import React from "react";
import PropTypes from "prop-types";

onSearch = (e) => {
    e.preventDefault();

    const { value } = this.input;

    if (value === '') {
      return;
    } 

    const cachedName = localStorage.getItem(value);

  }





function Player(props) {
  return (
    <div className="Player">
      <form type="submit" onSubmit={this.onSearch}>
          <input type="text" ref={node => this.input = node} />
          <button type="button">Search</button>
        </form>
      <span>{props.name}</span>
      <span> Fantasy Points {props.weekPts} </span>
    </div>
  );
}

Player.propTypes = {
  name: PropTypes.string.isRequired

};

export default Player;