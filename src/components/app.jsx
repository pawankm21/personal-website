import React from "react";
import { FileIcon, FolderIcon } from "./fileicons";
import TaskBar from "./taskbar";
import Dock from "./dock";
import ReactTooltip from "react-tooltip";
import Name from "./name";
import "./css/app.css";
import particlesConfig from "./particlesconfig.json";
import Particles from "react-particles-js";
import Circle from "./circles";

function App() {

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
        src={process.env.PUBLIC_URL + `/images/JavaScript.png`}
        alt="javaScript"
        color="#F0DB4F"
      />
      <Name />
      <Circle
        top="50px"
        right="180px"
        src={process.env.PUBLIC_URL + `/images/css.png`}
        alt="css"
        color="#379AD6"
      />
      <Circle
        top="160px"
        right="230px"
        src={process.env.PUBLIC_URL + `/images/react.png`}
        alt="react"
        color="#379AD6"
      />
      <Circle
        top="160px"
        right="110px"
        src={process.env.PUBLIC_URL + `/images/html.png`}
        alt="html"
        color="#E44D26"
        borderRadius="50%"
        glare={false}
      />
      <Circle
        top="270px"
        right="300px"
        src={process.env.PUBLIC_URL + `/images/python.png`}
        alt="python"
        color="white"
      />
      <Circle
        top="270px"
        right="180px"
        src={process.env.PUBLIC_URL + `/images/django.png`}
        alt="django"
        color="#092D1F"
      />

      <div className="folders">
        <FolderIcon icon="folder" name="Projects"></FolderIcon>
      </div>
      <div className="folders">
        <FileIcon icon="text" name="About_Me" pagewindow></FileIcon>
      </div>
      {/* <div className="folders">
        <FileIcon icon="folder" name="Achievements"></FileIcon>
      </div> */}
      {/* <div className="folders">
        <FileIcon icon="folder" name="Experience"></FileIcon>
      </div> */}
      <div className="folders">
        <FileIcon icon="text" name="Contact_Me"></FileIcon>
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
      <ReactTooltip id="Terminal" effect="solid"></ReactTooltip>
    </div>
  );
}
export default App;
