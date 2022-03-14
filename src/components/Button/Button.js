import React from 'react';
import PropTypes from 'prop-types';
//import scss file
import './Button.scss';

export default function Button({ label, variant, onClick }) {
  return (
    <button className={"button-" + variant} onClick={onClick}
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  variant: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  variant: null,
  onClick: undefined,
  label:"",
};