import React from "react";
import "./icons.css";

function FileIcon(props) {
  return (
    <div className="container">
      <img
        className="file-icon"
        alt="file icon"
        src={process.env.PUBLIC_URL + `/images/${props.icon}.png`}
      />
      <p>{props.name}</p>
    </div>
  );
}
function FolderIcon(props) {
  return (
    <div className="container">
      <img
        className="folder-icon"
        alt="folder icon"
        src={process.env.PUBLIC_URL + `/images/${props.icon}.png`}
      />
      <p>{props.name}</p>
    </div>
  );
}

export { FileIcon, FolderIcon };
