import React from 'react';
import './slider.css'
import side from '../image/sidee.png'

function Home()
 {
  const handleDownload = (event) => {
    event.preventDefault(); // Prevent the default link behavior
  
    // Create a link element
    const link = document.createElement('a');
    link.href = '../Faiza-hayat.pdf'; // Replace with the actual path to your resume file
    link.download = 'FaizaHayat-resume.pdf'; // Rename the downloaded file if needed
    document.body.appendChild(link);
  
    // Trigger a click event on the link to start the download
    link.click();
  
    // Clean up by removing the link
    document.body.removeChild(link);
  };
  



  return(<>
    <div className="portfolio-card">
    <div className="portfolio-card-content">
      <div className="portfolio-card-wrapper">
        <div className="portfolio-card-text">
          <h1 className="portfolio-card-title">I am Faiza Hayat</h1>
          <p className="portfolio-card-subtitle">Software Engineer | React.js Enthusiast</p>
          <p className="portfolio-card-description">
            Welcome to my portfolio! I am passionate about crafting seamless and elegant web experiences using React.js. 
            With a solid foundation in software engineering, I create innovative solutions that delight users and drive results.
          </p>
          <a href="/your-resume.pdf" onClick={handleDownload}>Download Resume</a>
        </div>
        <div className="portfolio-card-image">
          <img src={side} alt="Faiza Hayat" />
        </div>
      </div>
    </div>
  </div>
  
  
 
  


</>
  );
}

export default Home;
