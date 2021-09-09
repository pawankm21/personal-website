import React from "react";
import { FileIcon, FolderIcon } from "./fileicons";
import TaskBar from "./taskbar";
import Dock from "./dock";
import ReactTooltip from "react-tooltip";
import Name from "./name";
import './css/app.css';
import PageWindow from "./pagewindow";
import particlesConfig from './particlesconfig.json'
import Particles from "react-particles-js";

function App() {
  document.getElementById("terminal");

  return (
    <div id="app">
      <TaskBar></TaskBar>
      <Particles
        className="particles"
        height="100vh"
        width="100vw"
        params={particlesConfig}
      />
      <Name/>
      <div className="folders">
        <FolderIcon icon="folder" name="About me"></FolderIcon>
      </div>
      <div className="folders">
        <FolderIcon icon="folder" name="Projects"></FolderIcon>
      </div>
      <div className="folders">
        <FileIcon icon="text" name="Hobbies"></FileIcon>
      </div>
      <div className="folders">
        <FileIcon icon="text" name="Contact Me"></FileIcon>
      </div>
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
      <ReactTooltip
        id="wifi"
        effect="solid"
        delayHide={1000}
        delayUpdate={1000}
      >
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
