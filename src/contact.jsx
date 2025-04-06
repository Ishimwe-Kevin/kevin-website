function Contact() {
    return (
        <>
            <section id="contact" className="contact-section section-container">
                <h2 className="section-heading">Get in Touch</h2>
                <form id="contact-form" className="contact-form">
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
                    <button type="submit" className="btn-primary">Send Message</button>
                </form>
            </section>
        </>
    );
}

export default Contact;