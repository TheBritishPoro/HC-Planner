import React, { Component } from "react";
import "./App.css";
import Task from "./components/task";
import Header from "./components/header";
import makeElementsMovable from "./functions/makemovable";
import getPositions from "./functions/getpositions";
import setPositions from "./functions/setpositions";
import apiCalls from "./functions/apicalls";
import Bin from "./components/bin";

let tasks = [];
let initialPositions = [];
let positions = [];
let taskObjects = [];
let incrementKey = 0;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { renderedTasks: tasks };
  }

  render() {
    return (
      <div className="App">
        <Header
          renderTask={this.renderTask}
          writeSettings={this.saveSettings}
        />
        <div id="tasks-div">{this.state.renderedTasks}</div>
        <Bin />
      </div>
    );
  }

  componentDidMount() {
    this.loadTasks();
  }

  componentDidUpdate() {
    taskObjects = makeElementsMovable(taskObjects);
    positions = getPositions();
  }

  loadTasks = async () => {
    const responseTasks = await apiCalls.loadSettings();
    console.log(responseTasks);
    responseTasks.forEach(task => {
      this.renderTask(task.name, task.description, task.requirements);
      initialPositions.push({ top: task.top, left: task.left });
    });
    setPositions(initialPositions);
  };

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
    taskObject.id = "task-" + incrementKey;
    taskObject.name = name;
    taskObject.description = description;
    taskObject.requirements = requirements;
    taskObjects.push(taskObject);
    incrementKey++;
    this.setState({ renderedTasks: tasks });
  };

  saveSettings = async () => {
    await this.forceUpdate();
    for (let i = 0; i < taskObjects.length; i++) {
      taskObjects[i].top = positions[i].top;
      taskObjects[i].left = positions[i].left;
    }
    apiCalls.saveSettings({ tasks: taskObjects });
  };
}

export default App;
