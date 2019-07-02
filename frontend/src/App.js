import React, { Component } from "react";
import "./App.css";
import Task from "./components/task";
import Header from "./components/header";
import makeElementsMovable from "./functions/makemovable";
import getPositions from "./functions/getpositions";

let tasks = [];
let positions = [];
let taskObjects = [];
let incrementKey = 0;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { renderedTasks: [] };
  }

  render() {
    return (
      <div className="App">
        <Header
          renderTask={this.renderTask}
          writeSettings={this.saveSettings}
        />
        <div id="tasks-div">{this.state.renderedTasks}</div>
      </div>
    );
  }

  componentDidUpdate() {
    makeElementsMovable();
    positions = getPositions();
    console.log(positions);
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
    let taskObject = {};
    taskObject.name = name;
    taskObject.description = description;
    taskObject.requirements = requirements;
    taskObjects.push(taskObject);
    incrementKey++;
    this.setState({ renderedTasks: tasks });
  };

  saveSettings = () => {
    this.forceUpdate();
    for (let i = 0; i < taskObjects.length; i++) {
      taskObjects[i].top = positions[i].top;
      taskObjects[i].left = positions[i].left;
    }
  };
}

export default App;
