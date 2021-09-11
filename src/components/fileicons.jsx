import React, { useState } from "react";
import "./css/icons.css";
import Draggable from "react-draggable";
import PageWindow from "./pagewindow";

function FileIcon(props) {
  const [appear, setAppear] = useState(false);
  return (
    <section>
      <Draggable grid={[50, 50]}>
        <button
          className="container"
          onClick={() => {
            setAppear(!appear);
          }}
        >
          <img
            draggable="false"
            className="file-icon"
            alt="file icon"
            src={process.env.PUBLIC_URL + `/images/${props.icon}.png`}
          />
          <p>{props.name}</p>
        </button>
      </Draggable>
      {appear ? (
        <PageWindow windowName={props.name} text="Sorry this doesn't have any text yet!" setAppear={setAppear}/>
      ) : (
        ""
      )}
    </section>
  );
}
function FolderIcon(props) {
  const [appear, setAppear] = useState(false);
  return (
    <section>
      <Draggable grid={[50, 50]}>
        <button
          className="container"
          onClick={() => {
            setAppear(!appear);
          }}
        >
          <img
            draggable="false"
            className="folder-icon"
            alt="folder icon"
            src={process.env.PUBLIC_URL + `/images/${props.icon}.png`}
          />
          <p>{props.name}</p>
        </button>
      </Draggable>
      {appear ? (
        <PageWindow windowName={props.name} setAppear={setAppear} />
      ) : (
        ""
      )}
    </section>
  );
}

export { FileIcon, FolderIcon };
