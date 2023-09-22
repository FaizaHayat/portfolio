import React from "react";
import "./about.css";

function About() {
  return (
    <div className="cards">
      <div className="myCard">
        <div className="innerCard">
          <div className="frontSide">
            <p className="title">Web Developer</p>
            <p>Hover Me</p>
          </div>
          <div className="backSide">
          <p className="title">Back Side</p>
          <p>
            I'm a recently graduated web developer with a passion for crafting captivating online experiences. Proficient in HTML, CSS, and JavaScript, I'm enthusiastic about leveraging my skills to create exceptional web solutions.
          </p>
        </div>
        
        </div>
      </div>
      <div className="myCard">
        <div className="innerCard">
          <div className="frontSide">
            <p className="title">Graphic Designing</p>
            <p>Hover Me</p>
          </div>
          <div className="backSide">
            <p className="title">Back Side</p>
            <p>
              As a recent graduate exploring the world of graphic design, I am
              passionate about creating stunning visual content. I love
              experimenting with colors, shapes, and typography to convey
              compelling messages.
            </p>
          </div>
        </div>
      </div>
      <div className="myCard">
        <div className="innerCard">
          <div className="frontSide">
            <p className="title">Hobbies</p>
            <p>Hover Me</p>
          </div>
          <div className="backSide">
            <p className="title">Back Side</p>
            <p>
              Beyond my professional aspirations, I have a range of hobbies
              that bring joy to my life. From photography to hiking and playing
              musical instruments, I cherish these activities in my free time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
