import React, { Component } from "react";
class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="task-div">
        <div className="task-div-header">{this.props.taskName}</div>
        <p className="task-div-description">{this.props.description}</p>
        <p className="task-div-requirements">{this.props.requirements}</p>
      </div>
    );
  }
}

export default Task;
