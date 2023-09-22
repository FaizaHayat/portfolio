import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Skills from './components/pages/skill';
import Education from './components/pages/education';


function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skill" element={<Skills />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
