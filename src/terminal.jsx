import React from "react";
import "./terminal.css";
function Terminal() {
  return (
    <div className="terminal">
      <div className="window">
        <span
          class="dot"
          style={{
            backgroundColor: "rgb(32, 136, 55)",
          }}
        ></span>
        <span
          class="dot"
          style={{
            backgroundColor: "#0289D1",
          }}
        ></span>
        <span
          class="dot"
          style={{
            backgroundColor: "#C03737",
          }}
        ></span>
      </div>
    </div>
  );
}
export default Terminal;
