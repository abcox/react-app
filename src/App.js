import React, { /* Fragment, */ Component } from "react";
import logo from "./logo.svg";
//import { Timeline } from "antd";
import "./App.css";
import timeline from "./components/timeline/timeline";

/* class App extends Component {
  state = {};
  render() {
    return <timeline />;
  }
}

export default App; */

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <timeline />
    </div>
  );
}

export default App;
