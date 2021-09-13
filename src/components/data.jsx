import React from "react";
import "./css/data.css";

function Projects(props) {
  return (
    <div class="card">
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
      <div class="container">
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
    <div class="aboutme-container">
      <section class="">
        <div class="">
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
    <div class="contact-container">
      <form action="mailto:pawan9945667@gmail.com" method="POST" enctype="multipart/form-data">
        <label for="fname">First Name</label>
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Your name.."
        />

        <label for="lname">Last Name</label>
        <input
          type="text"
          id="lname"
          name="lastname"
          placeholder="Your last name.."
        />

        <label for="subject">Subject</label>
        <textarea
          id="subject"
          name="subject"
          placeholder="Write something.."
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export { Projects, AboutMe, Achievements, Experience, ContactMe };
