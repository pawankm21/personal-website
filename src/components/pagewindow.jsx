import React from "react";
import "./css/pagewindow.css";
import Window from "./window";
import Draggable from "react-draggable";
import Typist from "react-typist";
export default function PageWindow(props) {
  return (
    <Draggable handle=".page-window">
      <div className="window-position">
        <div className="page-window">
          <Window setAppear={props.setAppear} />
          <Typist>Sorry this doesn't have anything yet!</Typist>
        </div>
      </div>
    </Draggable>
  );
}
