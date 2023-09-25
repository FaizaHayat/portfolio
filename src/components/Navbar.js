import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; 
import GithubIcon from './image/github.png';
import LinkedInIcon from './image/linkedin.png';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/">
            <button className='btn'>Home</button>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/skill">
            <button className='btn'>Skills</button>
          </Link>
        </li> 
        <li className="nav-item">
          <Link to="/education">
            <button className='btn'>Education</button>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact">
            <button className='btn'>Contact</button>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about">
            <button className='btn'>About Me</button>
          </Link>
        </li>

        <li className="nav-item">
          <a href="https://github.com/FaizaHayat" target="_blank" rel="noopener noreferrer">
            <img src={GithubIcon} alt="GitHub" />
          </a>
        </li>
        <li className="nav-item">
          <a href="https://www.linkedin.com/in/imfaizahayat/" target="_blank" rel="noopener noreferrer">
            <img src={LinkedInIcon} alt="LinkedIn" />
          </a>
        </li>
      </ul>
  
  

</nav>

  );
}

export default Navbar;
