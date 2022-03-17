import React from "react";
import PropTypes from "prop-types";
//import scss file
import "./Title.scss";

export default function Title({ content, as, variant }) {
  return (
    <>
      {as && as === "h1" ? (
        <h1 className={"title-" + as + " title-" + variant}>{content}</h1>
      ) : as === "h2" ? (
        <h2 className={"title-" + as + " title-" + variant}>{content}</h2>
      ) : as === "h3" ? (
        <h3 className={"title-" + as + " title-" + variant}>{content}</h3>
      ) : as === "h4" ? (
        <h4 className={"title-" + as + " title-" + variant}>{content}</h4>
      ) : as === "h5" ? (
        <h5 className={"title-" + as + " title-" + variant}>{content}</h5>
      ) : as === "h6" ? (
        <h6 className={"title-" + as + " title-" + variant}>{content}</h6>
      ) : (
        ""
      )}
    </>
  );
}

Title.propTypes = {
  as: PropTypes.string,
  content: PropTypes.string.isRequired,
};

Title.defaultProps = {
  as: null,
  content: undefined,
  variant: null,
};
