import React from "react";
import "./css/pagewindow.css";
import Window from "./window";
import Draggable from "react-draggable";
import { Projects, AboutMe, Achievements, Experience, ContactMe } from "./data";

export default function PageWindow(props) {
  return (
    <Draggable handle=".handle">
      <div className="window-position">
        <div className="page-window ">
          <section className="handle">
            <Window setAppear={props.setAppear} />
          </section>
          <h1> {props.name} </h1>
          {props.name === "About_Me" ? <AboutMe /> : ""}
          {props.name === "Achievements" ? <Achievements /> : ""}
          {props.name === "Projects" ? (
            <Projects
              text="Antinormie Discord Bot"
              link=""
              des="Made with python, antinormie is a discord bot for my personal server. It can provide information on upcoming competitive programming contests, random DSA questions, tell a joke, tell an insult, tell dialogues, etc."
              img="https://raw.githubusercontent.com/pawankm21/discord-bot/master/images/skull.png"
            />
          ) : (
            ""
          )}
          {props.name === "Projects" ? (
            <Projects
              text="RoomLo"
              link=""
              des="An event management dashboard, made for managing college events and festivals.(Currently Working👷)"
              img=""
            />
          ) : (
            ""
          )}{" "}
          {props.name === "Projects" ? (
            <Projects
              text="Coming soon"
              link=""
              des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea aliquid praesentium rem quasi maiores, minus similique et fugiat obcaecati porro, vero, quia sint natus odit odio iusto! Eum, accusantium exercitationem."
              img=""
            />
          ) : (
            ""
          )}
          {props.name === "Experience" ? <Experience /> : ""}
          {props.name === "Contact_Me" ? <ContactMe /> : ""}
          <footer></footer>
        </div>
      </div>
    </Draggable>
  );
}
