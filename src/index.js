import React from "react";
import ReactDOM from "react-dom";
import AppContainer from "./App.js";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <AppContainer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
