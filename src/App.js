import React, { Component } from "react";
import "./App.css";
import Task from "./components/task";
import Header from "./components/header";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Task />
      </div>
    );
  }
}

export default App;
