import React, { Component } from "react";
import "./App.css";
import Task from "./components/task";
import Header from "./components/header";
import makeElementsMovable from "./makemovable";

let tasks = [];
let incrementKey = 0;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { renderedTasks: [] };
  }

  render() {
    return (
      <div className="App">
        <Header renderTask={this.renderTask} />
        <div id="tasks-div">{this.state.renderedTasks}</div>
      </div>
    );
  }

  componentDidUpdate() {
    makeElementsMovable();
  }

  renderTask = (name, description, requirements) => {
    tasks.push(
      <Task
        key={"task-" + incrementKey}
        id={"task-" + incrementKey}
        taskName={name}
        description={description}
        requirements={requirements}
      />
    );
    incrementKey++;
    this.setState({ renderedTasks: tasks });
  };
}

export default App;
