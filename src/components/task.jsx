import React, { Component } from "react";
class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="task-div">
        <div className="task-header">Sample Task Name</div>
        <p className="task-description">Sample Task Description</p>
        <p className="task-requirements">Sample Task Requirements</p>
      </div>
    );
  }
}

export default Task;
