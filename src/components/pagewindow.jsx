import React from "react";
import "./css/pagewindow.css";
import Window from "./window";
import Draggable from "react-draggable";
import { Projects, AboutMe, Achievements, Experience, ContactMe } from "./data";

export default function PageWindow(props) {
  return (
    <Draggable handle=".handle">
      <div className="window-position">
        <section className="handle">
          <Window setAppear={props.setAppear} />
        </section>

        <div className="page-window ">
          <h1>{props.name}</h1>
          {props.name === "About_Me" ? <AboutMe /> : ""}
          {props.name === "Achievements" ? <Achievements /> : ""}
          {props.name === "Projects" ? (
            <Projects
              text="Antinormie Discord Bot"
              link="https://github.com/pawankm21/discord-bot"
              des="Made with python, Antinormie is a discord bot for my personal server. It can provide basic moderation to the server, information on upcoming competitive programming contests, random DSA questions, tell a jokes, insults, saves dialogues, youtube searches, etc."
              img="https://www.nicepng.com/png/full/53-532481_how-to-set-use-cartoon-skull-svg-vector.png"
            />
          ) : (
            ""
          )}
          {props.name === "Projects" ? (
            <Projects
              text="Pokemon-Wiki"
              link="https://p0kemon-wiki.netlify.app/"
              des="A simple web application made with Reactjs to search and view pokemons. Click to view web app."
              img="https://upload.wikimedia.org/wikipedia/commons/4/4c/Pokeball.png"
            />
          ) : (
            ""
          )}{" "}
          {props.name === "Projects" ? (
            <Projects
              text="Collegium"
              link="https://peaceful-goldberg-fd87d3.netlify.app/"
              des="An event management dashboard, made for college students for managing events and festivals.(Currently Working👷)"
              img=""
            />
          ) : (
            ""
          )}{" "}
          {props.name === "Experience" ? <Experience /> : ""}
          {props.name === "Contact_Me" ? <ContactMe /> : ""}
        </div>
        <footer></footer>
      </div>
    </Draggable>
  );
}
