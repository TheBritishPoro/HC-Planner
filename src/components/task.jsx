import React, { Component } from "react";
class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id={this.props.id} className="task-div">
        <div id={this.props.id + "-header"} className="task-div-header">
          {this.props.taskName}
        </div>
        <p className="task-div-description">{this.props.description}</p>
        <p className="task-div-requirements">{this.props.requirements}</p>
      </div>
    );
  }
}

export default Task;
