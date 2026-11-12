
import { useState } from 'react';
import { ArrowUpRight, Mail, MessageCircle } from 'lucide-react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  }

  return (
    <section className="contact-section" id="contact-form">
      <div className="contact-content">
        <span className="section-label">LET'S CONNECT</span>

        <h2>
          Your next big idea
          <span>starts here.</span>
        </h2>

        <p>
          Tell us what you're building. Let's make meaningful
          progress together with VYORA.
        </p>

        <div className="contact-details">
          <a href="mailto:hello@vyora.com">
            <Mail size={18} /> hello@vyora.com
          </a>
          <span>
            <MessageCircle size={18} /> We'd love to hear from you.
          </span>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="contact-name">Your name</label>
        <input
          id="contact-name"
          type="text"
          placeholder="Enter your name"
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
          required
        />

        <label htmlFor="contact-email">Email address</label>
        <input
          id="contact-email"
          type="email"
          placeholder="you@example.com"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
          required
        />

        <label htmlFor="contact-message">Your message</label>
        <textarea
          id="contact-message"
          placeholder="Tell us about your idea..."
          rows="4"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          required
        />

        <button type="submit">
          Send message <ArrowUpRight size={18} />
        </button>

        {submitted && (
          <p className="contact-success" role="status">
            Thank you! Your message has been submitted successfully.
          </p>
        )}
      </form>
    </section>
  );
}

export default Contact;
