import React from "react";

const Footer = () => {
  const apple = {
    color: "green",
    fontStyle: "italic",
    fontSize: 16,
  };
  return (
    <div style={apple}>
      <br />
      <em>
        Note app, Department of Computer Science, University of Helsinki 2020
      </em>
    </div>
  );
};

export default Footer;
