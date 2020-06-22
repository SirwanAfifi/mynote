import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Login from "./pages/Login";
import Home from "./pages/Home";

const App = () => {
  return <Home />;
};

ReactDOM.render(<App />, document.querySelector("#root"));
