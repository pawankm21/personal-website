import React from "react";
import Typist from "react-typist";
import "./css/name.css";
import "react-typist/dist/Typist.css";
export default function Name() {
  return (
    <div className="board">
      <span>
        <svg
          id="star"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
        </svg>
      </span>
      <div className="name">
        <Typist
          avgTypingDelay={50}
          stdTypingDelay={5}
          startDelay={2000}
          cursor={{
            show: true,
            hideWhenDone: true,
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
    </div>
  );
}
