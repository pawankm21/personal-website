import React from "react";
import Tilt from "react-parallax-tilt";
import "./css/circle.css";
export default function Circle(props) {
  return (
    <div
      className="circle-position"
      style={{ right: props.right, top: props.top }}
    >
      <Tilt
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        gyroscope={true}
        glareEnable={props.glare}
        glareMaxOpacity={0.7}
        glareColor="#ffffff"
        glarePosition="all"
        glareBorderRadius="10%"
        tiltReverse={true}
        perspective={100}
        scale={1}
      >
        <div
          className="circle"
          style={{ background: props.color, borderRadius: props.borderRadius }}
        >
          <a href={props.link} rel="noreferrer" target="_blank">
            <img draggable="false" src={props.src} alt={props.alt} />
          </a>
        </div>
      </Tilt>
    </div>
  );
}
