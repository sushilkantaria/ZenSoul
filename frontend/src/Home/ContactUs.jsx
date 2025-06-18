import React, { useState } from 'react';
import './ContactUs.css';

const Contact_us = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Send form data to backend
//     fetch('http://localhost:4000/send-email', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(formData)
//     })
//       .then(res => res.json())
//       .then(data => {
//         if (data.success) {
//           // Show success alert
//           alert('Thanks for contacting us! We will get back to you soon.');
//           // Reload the page
//           window.location.reload();
//         } else {
//           alert('Error sending email. Please try again.');
//         }
//       })
//       .catch(err => {
//         console.error('Error:', err);
//         alert('Error sending email. Please try again.');
//       });
//   };

const handleSubmit = (e) => {
    e.preventDefault();
  
    // Send form data to backend
    fetch('http://localhost:4000/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          // Show success alert
          alert('Thanks for contacting us! We will get back to you soon.');
          // Reload the page
          window.location.reload();
        } else {
          alert('Error sending email. Please try again.');
        }
      })
      .catch(err => {
        console.error('Error:', err);
        alert('Error sending email. Please try again.');
      });
  };
  

  return (
    <div className="contact-container">
      <h1 className="contact-us-form-heading">Get in Touch with Us</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className='contact-form-label' htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className='contact-form-label' htmlFor="email">Email ID:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email ID"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className='contact-form-label' htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Enter the subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className='contact-form-label' htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button className='contact-form-submit-button' type="submit">Submit</button>
      </form>
    </div>           
  );
};

export default Contact_us;
