import React, { Component } from "react";
import Createtask from "./createtask";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="header flex-container">
        <h1 id="main-header">Hardcore Ironman Task Management</h1>
        <Createtask />
      </div>
    );
  }
}

export default Header;
