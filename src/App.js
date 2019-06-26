import React, { Component } from "react";
import "./App.css";
import Task from "./components/task";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Task />
      </div>
    );
  }
}

export default App;
