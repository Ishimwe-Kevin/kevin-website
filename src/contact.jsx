import { useState } from "react";
import emailjs from '@emailjs/browser';

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(
      'service_arbk9lr', // Replace with your EmailJS Service ID
      'dgn9kx3', // Replace with your EmailJS Template ID
      e.target,
      'X_aGhhWs2MW7Q57bx' // Replace with your EmailJS Public Key
    )
      .then((result) => {
        console.log(result.text);
        setStatus('Message sent successfully!');
        e.target.reset(); // Reset form after successful submission
      }, (error) => {
        console.log(error.text);
        setStatus('Failed to send message. Please try again.');
      })
      .finally(() => {
        setIsSubmitting(false);
        setTimeout(() => setStatus(''), 3000); // Clear status after 3 seconds
      });
  };

  return (
    <>
      <section id="contact" className="contact-section section-container">
        <h2 className="section-heading">Get in Touch</h2>
        <form id="contact-form" className="contact-form" onSubmit={sendEmail}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              placeholder="Your Name" 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="Your Email" 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea 
              id="message" 
              name="message" 
              placeholder="Your Message" 
              required
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="btn-primary" 
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
          {status && <p className="form-status">{status}</p>}
        </form>
      </section>
    </>
  );
}

export default Contact;