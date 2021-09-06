import "./styles.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";

var renderObject = (
  <div>
    <App></App>
  </div>
);

ReactDOM.render(renderObject, document.getElementById("root"));
