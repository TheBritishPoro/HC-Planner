import React, { Component } from "react";

class Bin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <img
        alt="bin"
        src={require("../img/bin.jpg")}
        style={{
          bottom: "0px",
          right: "0px",
          position: "absolute",
          zIndex: -1
        }}
      />
    );
  }
}

export default Bin;
