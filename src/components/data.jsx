import React from "react";
import "./css/data.css";

function Projects(props) {
  return (
    <div className="card">
      <a href={props.link}>
        <img
          src={
            props.img === ""
              ? process.env.PUBLIC_URL + "/images/github.png"
              : props.img
          }
          alt="Avatar"
        />
      </a>
      <div className="container">
        <a href={props.link} target="_blank" rel="noreferrer">
          <h4> {props.text} </h4>
        </a>

        <p>{props.des}</p>
      </div>
    </div>
  );
}
function AboutMe(props) {
  return (
    <div className="aboutme-container">
      <section className="">
        <div className="">
          <h2>Hello!</h2>
          <h3>I am Pawan Mishra and I love to code.</h3>
          <img src={process.env.PUBLIC_URL + "/images/Avatar.png"} alt="me" />
        </div>
        {"{"}
        <ul>
          <h4>"Programming Languages I know" :</h4>[<li>C/C++,</li>
          <li>Python,</li>
          <li>JavaScript,</li>
          <li>SQL,</li>]
        </ul>
        ,
        <ul>
          <h4>"Technologies I have worked with" :</h4>[<li>Django,</li>
          <li>Flask,</li>
          <li>React,</li>
          <li>MongoDB,</li>
          <li>PostgreSQL,</li>]
        </ul>
        ,
        <ul>
          <h4>"Tools I have used" :</h4>[<li>Git,</li>
          <li>Docker,</li>
          <li>Kubernetes,</li>
          <li>Bootstrap,</li>
          <li>Balsamiq</li>]
        </ul>
        ,
        <ul>
          <h4>"Languages I speak" :</h4>[<li>English,</li>
          <li>Hindi</li>]
        </ul>
        {"}"}
      </section>
    </div>
  );
}
function Achievements(props) {
  return (
    <div>
      this is my Achievements
      <p>{props.text}</p>
    </div>
  );
}
function Experience(props) {
  return (
    <div>
      this is my Experience
      <p>{props.text}</p>
    </div>
  );
}
function ContactMe(props) {
  return (
    <div className="contact-container">
      <form
        action="https://formsubmit.co/pawan994567@gmail.com"
        method="POST"

        // encType="multipart/htmlForm-data"
      >
        <label htmlFor="fname">First Name</label>
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Your name.."
          required
        />

        <label htmlFor="lname">Last Name</label>
        <input
          type="text"
          id="lname"
          name="lastname"
          placeholder="Your last name.."
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your email..."
          required
        />

        <label htmlFor="subject">Subject</label>
        <textarea
          id="subject"
          name="subject"
          placeholder="Write something.."
        ></textarea>
        <input
          type="hidden"
          name="_next"
          value="https://pawankm21.github.io/personal-website"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export { Projects, AboutMe, Achievements, Experience, ContactMe };
