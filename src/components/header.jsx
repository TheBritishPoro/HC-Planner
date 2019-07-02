import React, { Component } from "react";
import Createtaskmodal from "./createtaskmodal";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="header flex-container">
        <div id="save-div">
          <button className="btn-standard" onClick={this.props.writeSettings}>
            Save Tasks
          </button>
        </div>
        <h1 id="main-header">OSRS Task Management</h1>
        <Createtaskmodal renderTask={this.props.renderTask} />
      </div>
    );
  }
}

export default Header;
