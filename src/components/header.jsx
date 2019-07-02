import React, { Component } from "react";
import Createtask from "./createtaskmodal";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="header flex-container">
        <h1 id="main-header">OSRS Task Management</h1>
        <Createtask renderTask={this.props.renderTask} />
      </div>
    );
  }
}

export default Header;
