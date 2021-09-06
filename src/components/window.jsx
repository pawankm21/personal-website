import React from 'react'
import './css/window.css'
export default function Window(props) {
    return (
      <div className="window">
        <button
          onClick={() => {
            props.setAppear(false);
          }}
          className="dot"
          style={{
            backgroundColor: "red",
          }}
        ></button>
        <button
          className="dot"
          style={{
            backgroundColor: "#FFF90F",
          }}
        ></button>
        <button
          onClick={() => {
            props.setMinimize(true);
          }}
          className="dot"
          style={{
            backgroundColor: "green",
          }}
        ></button>
      </div>
    );
}