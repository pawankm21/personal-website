import React from "react";
import "./dock.css";

function Dock(props) {
  return (
    <div className="dock">
      <span id="dock-container">
        <img
          className="dock-icons"
          alt="Terminal icon"
          src={process.env.PUBLIC_URL + `/images/terminal.png`}
        />
        <img
          className="dock-icons"
          alt="GitHub icon"
          src={process.env.PUBLIC_URL + `/images/github.png`}
        />
        <img
          className="dock-icons"
          alt="Leetcode icon"
          src={process.env.PUBLIC_URL + `/images/leetcode.png`}
        />
        <img
          className="dock-icons"
          alt="linkedin icon"
          src={process.env.PUBLIC_URL + `/images/linkedin.png`}
        />
        <img
          className="dock-icons"
          alt="devpost icon"
          src={process.env.PUBLIC_URL + `/images/devpost.png`}
        />
        <img
          className="dock-icons"
          alt="binarysearch icon"
          src={process.env.PUBLIC_URL + `/images/binarysearch.png`}
        />
      </span>
    </div>
  );
}

export default Dock;
