import React from "react";
import "./css/icons.css";
import Draggable from "react-draggable";


function FileIcon(props) {
  return (
    <Draggable grid={[50,50]}>
      <button className="container" onClick={() => { console.log("clicked") }}>
        <img draggable="false"
          className="file-icon"
          alt="file icon"
          src={process.env.PUBLIC_URL + `/images/${props.icon}.png`}
        />
        <p>{props.name}</p>
      </button>
    </Draggable>
  );
}
function FolderIcon(props) {
  return (
    <Draggable grid={[50, 50]}>
      <button className="container" onClick={()=>{console.log("clicked")}}>
        <img
          draggable="false"
          className="folder-icon"
          alt="folder icon"
          src={process.env.PUBLIC_URL + `/images/${props.icon}.png`}
        />
        <p>{props.name}</p>
      </button>
    </Draggable>
  );
}

export { FileIcon, FolderIcon };
