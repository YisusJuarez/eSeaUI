import React from "react";
import PropTypes from "prop-types";
//import scss file
import "./Title.scss";

export default function Title({ content, as }) {
  return (
    <>
    {as && as === "h1" ? <h1 className={"title-" + as}>{content}</h1> 
    : as === "h2" ?  <h2 className={"title-" + as}>{content}</h2> 
    :as === "h3" ? <h3 className={"title-" + as}>{content}</h3>
    :"" }</>
  );
}

Title.propTypes = {
  as: PropTypes.string,
  content: PropTypes.string.isRequired,
};

Title.defaultProps = {
  as: null,
  content: undefined,
};
