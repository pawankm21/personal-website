import { useState } from "react";
import Draggable from "react-draggable";
import "./css/terminal.css";
import Window from "./window";
function Terminal(props) {
  var inputText = "";
  const [command, setCommand] = useState(inputText);
  function wordCheck(event) {
    if (event.key === " ") {
      console.log("space is pressed");
    }
  }
  return (
    <Draggable handle=".window">
      <div id="terminal">
        <div className="window">
          <Window setAppear={props.setAppear} setMinimize={props.setMinimize} />
        </div>
        <div id="command-line">
          <span>
            {"$"}
            <input type="text" name="command-input" onKeyPress={wordCheck} />
          </span>
        </div>
      </div>
    </Draggable>
  );
}
export default Terminal;
