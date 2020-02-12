import React from "react";

const Header = (props) => {
  const { text } = props;
    return (
      <div id="header">
        <h2>{text}</h2>
      </div>
    );
  };

export default Header;