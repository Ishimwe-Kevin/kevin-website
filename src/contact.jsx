import { useState } from "react";
import emailjs from '@emailjs/browser';

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Log form data for debugging
    const formData = new FormData(e.target);
    console.log('Form Data:', {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    });

    emailjs
      .sendForm(
        'service_arbk9lr', // Your Service ID
        'template_8mjlsuh', // Your Template ID (added 'template_' prefix if needed)
        e.target,
        'X_aGhhWs2MW7Q57bx' // Your Public Key
      )
      .then(
        (result) => {
          console.log('Success:', result.text);
          setStatus('Message sent successfully!');
          e.target.reset(); // Reset form after successful submission
        },
        (error) => {
          console.error('Error:', error.text); // Use console.error for better visibility
          setStatus(`Failed to send message: ${error.text}`);
        }
      )
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
              name="name" // Must match template parameter
              placeholder="Your Name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email" // Must match template parameter
              placeholder="Your Email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message" // Must match template parameter
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
          {status && (
            <p className={`form-status ${status.includes('Failed') ? 'error' : ''}`}>
              {status}
            </p>
          )}
        </form>
      </section>
    </>
  );
}

export default Contact;

