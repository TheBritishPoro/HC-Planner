import React, { Component } from "react";
import "./App.css";
import Task from "./components/task";
import Header from "./components/header";

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

  renderTask = (name, description, requirements) => {
    tasks.push(
      <Task
        key={incrementKey}
        taskName={name}
        description={description}
        requirements={requirements}
      />
    );
    incrementKey++;
    this.setState({ renderedTasks: tasks });
    console.log(tasks);
  };
}

export default App;
