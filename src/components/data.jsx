import React from "react";
import './css/card.css'

  function Projects (props)  {
    return (
      <div class="card">
        <a href="https://github.com/" target="_blank" rel="noreferrer">
          <img
            src={process.env.PUBLIC_URL + "/images/github.png"}
            alt="Avatar"
          />
        </a>
        <div class="container">
          <h4>
            <b>{props.text}</b>
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            aliquam officia maiores animi voluptate sit mollitia consequatur,
            quae nostrum ad laudantium earum, voluptatibus fuga. Repellat dolore
            sed omnis voluptates veritatis!{" "}
          </p>
        </div>
      </div>
    );
  }
  function AboutMe (props)  {
    return (
     <div class="card">
  <img src={process.env.PUBLIC_URL+'/images/github.com'} alt="Avatar" />
  <div class="container">
    <h4><b>John Doe</b></h4> 
          {/* <p>{ props.text}</p> */}
  </div>
</div>
    );
  }
  function Achievements (props)  {
    return (
      <div>
        this is my Achievements
        <p>{props.text}</p>
      </div>
    );
    }
  function Experience (props){
    return (
      <div>
        this is my Experience
        <p>{props.text}</p>
      </div>
    );
    }
    function ContactMe(props)  {
       return (
         <div>
           this is my Contact Page
           <p>{props.text}</p>
         </div>
       );
  }


export {Projects,AboutMe,Achievements,Experience,ContactMe}