import React from "react";
import Typist from "react-typist";
import "./css/name.css";
export default function Name() {
  return (
    <div className="name">
      <Typist avgTypingDelay={90} stdTypingDelay={5} startDelay={3000}>
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
