import { useState, useEffect } from "react";
import Draggable from "react-draggable";
import "./css/terminal.css";
import Window from "./window";
function Terminal(props) {
  const commands = [  String.raw               
`
  /$$$$$$
 /$$__  $$
| $$  \ $$
| $$  | $$
| $$$$$$$/
| $$____/ 
| $$      
| $$      
|__/` ,
    
  ];
  var input = "";
  const [keypress, setKeypress] = useState(false);
  function downHandler({ key }) {
    if (input.length < 10) {
      setKeypress(true);
    input = input + key;

    }

    console.log(input);
  }
  function upHandler({ key }) {
    setKeypress(false);
  }

  useEffect(() => {
  
    document
      .getElementById("command-line")
      .addEventListener("keydown", downHandler);
    document
      .getElementById("command-line")
      .addEventListener("keyup", upHandler);
    return () => {
      try{
        document
          .getElementById("command-line")
          .removeEventListener("keydown", downHandler);
        document
          .getElementById("command-line")
          .removeEventListener("keyup", upHandler);
      }
      catch (err)
      {
        console.log("removed");
      }
    };
    
     
  }, []);
  const [maximize, setMaximize] = useState(false);

  return (
    <Draggable>
      <div
        id="terminal"
        style={maximize ? { width: "500px", height: "500px" } : {}}
      >
        <div className="window">
          <Window
            setAppear={props.setAppear}
            setMinimize={props.setMinimize}
            setMaximize={setMaximize}
            isMax={maximize}
          />
        </div>
        <div id="command-line" tabIndex="0">
          <span>{"$"}</span>
        </div>
        <pre>{commands[0]}</pre>
      </div>
    </Draggable>
  );
}
export default Terminal;
