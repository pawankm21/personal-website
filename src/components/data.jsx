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
      <section>
        <div>
          <h2>Hello! I am Pawan Mishra.</h2>
          <p>
            An IT undergrad who loves programming.
          </p>
          <img src={process.env.PUBLIC_URL + "/images/Avatar.png"} alt="me" />
          <p>
            
          </p>
          
        </div>
        <table>
          <thead>
            <tr>
              <th colSpan="2">Programming Languages I know :</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>C/C++</td>
              <td>
                <progress className="green" value="0.8"></progress>
              </td>
            </tr>
            <tr>
              <td>JavaScript</td>
              <td>
                <progress className="blue" value="0.7"></progress>
              </td>
            </tr>
            <tr>
              <td>Python</td>
              <td>
                <progress className="red" value="0.6"></progress>
              </td>
            </tr>
            <tr>
              <td> SQL</td>
              <td>
                <progress className="pink" value="0.5"></progress>
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <br />
        <table>
          <thead>
            <tr>
              <th colSpan="2">Libraries and Frameworks I have worked with :</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Django</td>
              <td>
                <progress className="green" value="0.6"></progress>
              </td>
            </tr>
            <tr>
              <td>React</td>
              <td>
                <progress className="blue" value="0.7"></progress>
              </td>
            </tr>
            <tr>
              <td>Express</td>
              <td>
                <progress className="red" value="0.8"></progress>
              </td>
            </tr>
            <tr>
              <td>Node.js</td>
              <td>
                <progress className="pink" value="0.8"></progress>
              </td>
            </tr>
            <tr>
              <td>JQuery</td>
              <td>
                <progress className="green" value="0.8"></progress>
              </td>
            </tr>
            <tr>
              <td>Flask</td>
              <td>
                <progress className="blue" value="0.6"></progress>
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <br />
        <table>
          <thead>
            <tr>
              <th colSpan="2">Databases I have used :</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>PostgreSQL</td>
              <td>
                <progress className="green" value="0.5"></progress>
              </td>
            </tr>
            <tr>
              <td>MongoDB</td>
              <td>
                <progress className="blue" value="0.6"></progress>
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <br />
        <table>
          <thead>
            <tr>
              <th colSpan="2">Tools :</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Git</td>
              <td>
                <progress className="green" value="0.8"></progress>
              </td>
            </tr>
            <tr>
              <td>Docker</td>
              <td>
                <progress className="red" value="0.6"></progress>
              </td>
            </tr>
            <tr>
              <td>Kubernetes</td>
              <td>
                <progress className="blue" value="0.6"></progress>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}
function Achievements(props) {
  return (
    <div>
      {"   "}
      Nothing to show😓
      <p>{props.text}</p>
    </div>
  );
}
function Experience(props) {
  return (
    <div>
      {"   "}
      Nothing to show😓
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
          rows="4"
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
