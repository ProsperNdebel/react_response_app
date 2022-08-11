import React from "react";
import propTypes from "prop-types";
function Header({ text }) {
  //instead of  props you can use destructure thats if you know what props are being passed in
  return (
    <header style={{ backgroundColor: "blue", color: "red" }}>
      {" "}
      {/*this is for inline styles son but you can also specify the styles in a variable but then you would have to use single curly braces */}
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}

//this is for defining props supposing you did not put any bwhile rendering them in the within the App component
Header.defaultProps = {
  text: "Feedback UI",
};

//youcan also use propTypes
Header.propTypes = {
  text: propTypes.string.isRequired,
};
export default Header;
