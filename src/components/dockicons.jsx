import React from "react";
import "./css/dockicons.css";
export default function DockIcons(props) {
  // console.log(props)
  return (
    <span data-tip={props.name} data-for={props.name}>
      <a href={props.link} rel="noreferrer" target="_blank">
        <img
          className="dock-icons"
          alt={props.name + " icon"}
          src={process.env.PUBLIC_URL + `/images/${props.name}.png`}
        />
      </a>
    </span>
  );
}
