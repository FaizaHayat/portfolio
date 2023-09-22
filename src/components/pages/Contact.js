// Contact.js
import React, {useState} from 'react';
import './contact.css'

function Contact() {
 
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // You can add your contact form submission logic here
      console.log('Form data submitted:', formData);
      // Clear the form fields after submission (optional)
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    };
  
    return (
      <div className="contact-container">
        <h1>Contact Me</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button className='btn' type="submit">Submit</button>
        </form>
      </div>
    )
}

export default Contact;
