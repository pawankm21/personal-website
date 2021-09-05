import React from "react";
import Draggable from "react-draggable";
import "./terminal.css";
function Terminal() {
  return (
    <Draggable handle=".window">
      <div id="terminal">
        <div className="window">
          <span
            className="dot"
            style={{
              backgroundColor: "red",
            }}
          ></span>
          <span
            className="dot"
            style={{
              backgroundColor: "yellow",
            }}
          ></span>
          <span
            className="dot"
            style={{
              backgroundColor: "green",
            }}
          ></span>
        </div>
        <div id="command-line">
          <p>{"$"}</p>
        </div>
      </div>
    </Draggable>
  );
}
export default Terminal;
