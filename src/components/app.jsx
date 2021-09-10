import React from "react";
import { FileIcon, FolderIcon } from "./fileicons";
import TaskBar from "./taskbar";
import Dock from "./dock";
import ReactTooltip from "react-tooltip";
import Name from "./name";
import './css/app.css';
import particlesConfig from './particlesconfig.json'
import Particles from "react-particles-js";
import Circle from "./circles";

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
      <Name />
      <Circle
        top="50px"
        right="300px"
        src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
        alt="javaScript"
        color="#F0DB4F"
      />
      <Name />
      <Circle
        top="50px"
        right="180px"
        src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png"
        alt="css"
        color="#379AD6"
      />
      <Circle
        top="160px"
        right="230px"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
        alt="react"
        color="#379AD6"
      />
      <Circle
        top="160px"
        right="110px"
        src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png"
        alt="html"
        color="#E44D26"
      />
      <Circle
        top="270px"
        right="300px"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2048px-Python-logo-notext.svg.png"
        alt="python"
        color="white"
      />
      <Circle
        top="270px"
        right="180px"
        src="https://icon-library.com/images/django-icon/django-icon-0.jpg"
        alt="python"
        color="#092D1F"
      />
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
      <ReactTooltip id="wifi" effect="solid">
        Connect with me
      </ReactTooltip>
      <ReactTooltip id="binarysearch" effect="solid"></ReactTooltip>
      <ReactTooltip id="github" effect="solid"></ReactTooltip>
      <ReactTooltip id="leetcode" effect="solid"></ReactTooltip>
      <ReactTooltip id="linkedin" effect="solid"></ReactTooltip>
      <ReactTooltip id="devpost" effect="solid"></ReactTooltip>
      <ReactTooltip id="terminal" effect="solid"></ReactTooltip>
    </div>
  );

}
export default App;
