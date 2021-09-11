import { useState } from "react";
import Draggable from "react-draggable";
import "./css/terminal.css";
import Typist from "react-typist";
import Window from "./window";
function Terminal(props) {
  function readKeyPress({ key }) {
    if (key === "Enter") {
      try {
        setOutput(commands[input].message);
        setOutputStyle(commands[input].style);
      } catch {
        setOutput(commands["error"].message);
        setOutputStyle(commands["error"].style);
      }
      setInput("");
    } else if (key === "Backspace") {
      setInput(input.slice(0, input.length - 1));
    } else if (
      (key >= "a" && key <= "z") ||
      (key >= "A" && key <= "Z") ||
      (key >= "0" && key <= "9") ||
      (key===" ")
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

  const commands = {
    name: { message: "\nPawan Kumar Mishra\n", style: { color: "lightblue" } },
    about: {
      message: "\nA person👨\n",
      style: {
        color: "green",
      },
    },
    help: {
      message: "\nname, about, help, random\n",
      style: { color: "cyan" },
    },
    error: {
      message:
        "\nKeyboard not found. Press a button on the non-existent keyboard to fix it.\n",
      style: { color: "red" },
    },
    random: {},
  };
  const [input, setInput] = useState("");
  const [maximize, setMaximize] = useState(false);
  const [output, setOutput] = useState("");
  const [inputStyle, setInputStyle] = useState({});
  const [outputStyle, setOutputStyle] = useState({});
  return (
    <Draggable>
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
          {props.appear ? <Typist>{`Type "help" to see commands`}</Typist> : ""}
          <pre>{image}</pre>
          <span style={inputStyle}>$ {input}</span>
          <br />
          <span style={outputStyle}>
            {output === "" ? "" : "$"} {output}
          </span>
        </div>
      </div>
    </Draggable>
  );
}
export default Terminal;
