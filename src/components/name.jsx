import React from "react";
import Typist from "react-typist";
import "./css/name.css";
import "react-typist/dist/Typist.css";
export default function Name() {
  return (
    <div className="name">
      <Typist avgTypingDelay={100} stdTypingDelay={15} startDelay={1000}> 
        <span>
          I am Paw$n
          <Typist.Backspace count={2} delay={200} />
          an.
        </span>
        <br />
        <Typist.Delay ms={1000} />
        <span>An aspiring </span>
        <br />
        <span> Web Developer.</span>
      </Typist>
    </div>
  );
}
