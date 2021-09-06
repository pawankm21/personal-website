import React from "react";
import { FileIcon, FolderIcon } from "./fileicons";
import TaskBar from "./taskbar";
import Dock from "./dock";
import ReactTooltip from "react-tooltip";
import Name from "./name";
function App() {
  document.getElementById("terminal");
  return (
    <div id="app">
      <TaskBar></TaskBar>
      <div>
        <FolderIcon icon="folder" name="Projects"></FolderIcon>
      </div>
      <div>
        <FolderIcon icon="folder" name="Achievements"></FolderIcon>
      </div>
      <div>
        <FileIcon icon="text" name="About me"></FileIcon>
      </div>
      <div>
        <FileIcon icon="text" name="Contact Me"></FileIcon>
      </div>
      <Name />
      <Dock></Dock>
      <ReactTooltip id="battery" effect="solid">
        <span>{`I am ${new Date().getFullYear() - 2001} years old`}</span>
      </ReactTooltip>
      <ReactTooltip id="settings" effect="solid">
        <span>{"settings"}</span>
      </ReactTooltip>
      <ReactTooltip id="power" effect="solid">
        <span>{"power"}</span>
      </ReactTooltip>
      <ReactTooltip id="wifi" effect="solid" delayHide={100} delayUpdate={100}>
        <h1>{"Connect with me!"}</h1>
        <ul>
          <li>
            <a href="mailto:pawan994567@gmail.com">Email</a>
          </li>
          <li>
            <a href="https://www.facebook.com/profile.php?id=100049156215501">
              Facebook
            </a>
          </li>
          <li>
            <a href="twitter.com">Twitter</a>
          </li>
        </ul>
      </ReactTooltip>
      <ReactTooltip id="BinarySearch" effect="solid"></ReactTooltip>
      <ReactTooltip id="GitHub" effect="solid"></ReactTooltip>
      <ReactTooltip id="Leetcode" effect="solid"></ReactTooltip>
      <ReactTooltip id="LinkedIn" effect="solid"></ReactTooltip>
      <ReactTooltip id="Devpost" effect="solid"></ReactTooltip>
      <ReactTooltip id="Terminal" effect="solid"></ReactTooltip>
    </div>
  );
}
export default App;
