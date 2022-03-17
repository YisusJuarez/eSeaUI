import React from "react";
import PropTypes from "prop-types";
//import scss file
import "./Input.scss";

export default function Input({ placeholder, variant, type, onChange, value }) {
  return (
    <input
      type="text"
      className={"input input-" + type + "-" + variant}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

Input.propTypes = {
  variant: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string,
};

Input.defaultProps = {
  variant: null,
  onChange: undefined,
  placeholder: "",
  value: "",
  type: null,
};
