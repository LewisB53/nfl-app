import React from "react";
import PropTypes from "prop-types";

function StatsToDate(props) {
  return (
    <div className="Player">
      <span>{props.name}</span>
      <span> Fantasy Points {props.weekPts} </span>
    </div>
  );
}

StatsToDate.propTypes = {
  name: PropTypes.string.isRequired

};

export default StatsToDate;