import React from "react";
import PropTypes from "prop-types";

function Card({ children, reverse }) {
  //   return (
  //     //this is the same as ${reverse&&'reverse'} this is a constional class
  //     <div className={`card ${reverse === true ? "reverse" : ""} `}>
  //       {children}
  //     </div>
  //   );
  return (
    <div
      className="card"
      //this is how inline styles are done
      style={{
        backgroundColor: reverse ? "rgba(0,0,0,0.4)" : "#fff",
        color: reverse ? "#fff" : "#000",
      }}
    >
      {children}
    </div>
  );
}

//come back to this default props thing
Card.defaultProps = {
  reverse: false,
};

//this is how you set propTypes

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};

export default Card;
