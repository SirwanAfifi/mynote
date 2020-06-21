import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Login from "./pages/Login";

const App = () => {
  return <Login />;
};

ReactDOM.render(<App />, document.querySelector("#root"));
