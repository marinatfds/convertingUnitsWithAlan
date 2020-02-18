import React from "react";
import PropTypes from "prop-types";

export function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = { onClick: PropTypes.func.isRequired };

export default Button;
