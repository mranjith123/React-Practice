import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <form className="contact-form">
        <label htmlFor="name">Full Name:</label>
        <input id="name" type="text" placeholder="Your Name" required />

        <label htmlFor="email">Email:</label>
        <input id="email" type="email" placeholder="Your Email" required />

        <label htmlFor="phone">Phone Number:</label>
        <input id="phone" type="tel" placeholder="Your Phone" required />

        <label htmlFor="subject">Subject:</label>
        <input id="subject" type="text" placeholder="Subject" />

        <label htmlFor="message">Your Message:</label>
        <textarea id="message" placeholder="Your Message" required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
