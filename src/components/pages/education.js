import React from 'react';
import './education.css';

const education = () => {
  const educationData = [
    {
      institution: 'Allama Iqbal Public High School',
      degree: 'Matriculation',
      year: '2003 - 2015',
      location: 'Taxila',
    },
    {
      institution: 'Sir Syed Campus I',
      degree: 'Bachelor of Science in Computer Science',
      year: '2016 - 2019',
      location: 'Wah Cantt',
    },
    {
      institution: 'COMSAT University Islamabad ',
      degree: 'Bachelor of Science in Software Engeneering',
      year: '2019 - 2023',
      location: 'Wah Cantt',
    },
  ];

  return (
    <div >
      <h2 className='heading'>Education</h2>
      <div className='education'>
      <ul>
        {educationData.map((education, index) => (
          <li key={index}>
            <h3>{education.institution}</h3>
            <p>{education.degree}</p>
            <p>{education.year}</p>
            <p>{education.location}</p>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default education;
