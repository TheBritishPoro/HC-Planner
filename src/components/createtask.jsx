import React, { Component } from "react";
class Createtask extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="create-task">
        <button id="create-task-button">Create Task</button>
      </div>
    );
  }
}

export default Createtask;
