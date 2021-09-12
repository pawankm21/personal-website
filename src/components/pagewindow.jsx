import React from "react";
import "./css/pagewindow.css";
import Window from "./window";
import Draggable from "react-draggable";
import {Projects,AboutMe,Achievements,Experience,ContactMe} from "./data";

export default function PageWindow(props) {
  return (
    <Draggable handle=".handle">
      <div className="window-position">
        <div className="page-window ">
          <section className="handle">
            <Window setAppear={props.setAppear} />
          </section>

          <h1> {props.name} </h1>
          {props.name.replace("_", "") === "About_Me" ? <AboutMe /> : ""}
          {props.name === "Achievements" ? <Achievements /> : ""}
      
          {props.name === "Projects" ? <Projects text="antinormie" /> : ""}
          {props.name === "Projects" ? <Projects text="CRM" /> : ""}
          {props.name === "Projects" ? (
            <Projects text="Personal Website" />
          ) : (
            ""
          )}
          {props.name === "Experience" ? <Experience /> : ""}
          {props.name.replace("_", "") === "Contact_Me" ? <ContactMe /> : ""}
         <footer></footer>
        </div>
      </div>
    </Draggable>
  );
}
