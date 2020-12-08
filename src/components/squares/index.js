import React from "react";
import PropTypes from "prop-types";

function Button({item, index, handleClick}) {
  return (
    <button className="square" key={index} index={index} onClick={() => handleClick(index)}>
      {item}
    </button>
  );
}

Button.propTypes = {
  item:PropTypes.string,
  index: PropTypes.number,
  handleClick: PropTypes.func,
}

export default Button;
