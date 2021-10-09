import { useState } from "react";
import Draggable from "react-draggable";
import "./css/terminal.css";
import { commands }  from './terminaldata'  ;
import Window from "./window";


function Terminal(props) {
  function readKeyPress({ key }) {
    if (key === "Enter") {
      try {
        setOutput(commands[input].message[Math.floor(Math.random()*(commands[input].message.length))]);
        setOutputStyle(commands[input].style);
      } catch (e) {
        setOutput(commands["error"].message);
        setOutputStyle(commands["error"].style);
      }

      setInput("");
    } else if (key === "Backspace") {
      setInput(input.slice(0, input.length - 1));
    } else if (
      key.length === 1 &&
      ((key >= "a" && key <= "z") ||
        (key >= "A" && key <= "Z") ||
        (key >= "0" && key <= "9") ||
        key === " ")
    ) {
      setInput(input + key);
      if (commands[input] !== undefined) setInputStyle(commands[input].style);
    }
  }
  const image = String.raw`
    /$$$$$$
   /$$__  $$
  | $$  \ $$
  | $$  | $$
  | $$$$$$$/
  | $$____/
  | $$
  | $$
  |__/`;

  const [input, setInput] = useState("");
  const [maximize, setMaximize] = useState(false);
  const [output, setOutput] = useState("");
  const [inputStyle, setInputStyle] = useState({});
  const [outputStyle, setOutputStyle] = useState({});
  return (
    <Draggable handle=".window">
      <div
        tabIndex="-1"
        id="terminal"
        style={
          props.minimize
            ? { display: "none" }
            : props.maximize
            ? { width: "500px", height: "500px" }
            : {}
        }
        onKeyDown={readKeyPress}
        
      >
        <div className="window">
          <Window 
            setAppear={props.setAppear}
            setMinimize={props.setMinimize}
            setMaximize={setMaximize}
            isMax={maximize}
          />
        </div>
        <div id="command-line">
          <pre>{image}</pre>
             <p>Click to start typing.
            Type 'help' to see commands.</p>
          
          <span style={inputStyle}>
            {":)"} {input}
          </span>
          <span className="blinking-cursor">|</span>
          <br />
          <span style={outputStyle}>
            {output === "" ? "" : "=>>"} {output}
          </span>
        </div>
      </div>
    </Draggable>
  );
}
export default Terminal;
