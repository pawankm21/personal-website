import React from "react";
import "./css/window.css";
export default function Window(props) {
  return (
    <div className="window">
      <button
        onClick={() => {
          props.setAppear(false);
        }}
        className="dot"
        style={{
          backgroundColor: "#FF453A",
        }}
      ></button>
      <button
        onClick={() => {
          try {
            props.setMaximize(!props.isMax);
          } catch (err) {
            console.log(err);
          }
        }}
        className="dot"
        style={{
          backgroundColor: "#FFD60A",
        }}
      ></button>
      <button
        onClick={() => {
          try {
            props.setMinimize(true);
          } catch (err) {
            console.log(err);
          }
        }}
        className="dot"
        style={{
          backgroundColor: "#32D74B",
        }}
      ></button>
    </div>
  );
}
