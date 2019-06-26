import React, { Component } from "react";
import Createtask from "./createtask";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="header">
        <Createtask />
      </div>
    );
  }
}

export default Header;
