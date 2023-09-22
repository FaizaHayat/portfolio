import React from 'react';
import './skill.css'; // Import your CSS file

const Skill = () => {
  return (
    <div className="skills-container">
      <h1 className="skills-header">Skills</h1>
      <div className="skills">
        <div className="skill">
          <h2>Programming Languages</h2>
          <ul>
            <li>Java</li>
            <li>Python</li>
          </ul>
        </div>
        <div className="skill">
          <h2>Web Development</h2>
          <ul>
            <li>React</li>
            <li>Node.js</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Bootstrap</li>
          </ul>
        </div>
        <div className="skill">
          <h2>Tools</h2>
          <ul>
            <li>Visual Studio</li>
            <li>Android Studio</li>
            <li>Jupyter</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skill;
