import React from "react";
import "./css/pagewindow.css";
import Window from "./window";
import Draggable from "react-draggable";

export default function PageWindow(props) {
  return (
    <Draggable handle=".page-window">
      <div className="window-position">
        <div className="page-window">
          <Window />
          {props.text}
        </div>
      </div>
    </Draggable>
  );
}
