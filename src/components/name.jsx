import React from "react";
import Typist from "react-typist";
import "./css/name.css";
import "react-typist/dist/Typist.css";
export default function Name() {
  return (
    <div className="name">
      <Typist
        avgTypingDelay={50}
        stdTypingDelay={5}
        startDelay={2000}
        cursor={{
          show: false,
        }}
      >
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
