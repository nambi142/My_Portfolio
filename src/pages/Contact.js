import { useState } from "react";
import emailjs from "emailjs-com";
import '../Css/Home.css';

const Contact = () => {

    const [form, setForm] = useState({ name: "", email: "", message: "" });
    
      // Handle input changes
      const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
      };
    
      // Handle Email submission
      const sendEmail = (e) => {
        e.preventDefault();
    
        const templateParams = {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        };
        emailjs
          .send(
            "service_3u23jnq",
            "template_nstaec3",
            templateParams,
            "BMpW4NjLKBbPvjGwP"
          )
          .then(
            () => {
              alert("Email sent successfully!");
              setForm({ name: "", email: "", message: "" });
            },
            (error) => {
              alert("Failed to send email. Try again.");
              console.error("EmailJS Error:", error);
            }
          );
      };
    
      // Handle WhatsApp submission
      const sendToWhatsApp = (e) => {
        e.preventDefault();
        const message = `Name: ${form.name}\nEmail: ${form.email}\nMessage: ${form.message}`;
        const whatsappURL = `https://wa.me/918637619849?text=${encodeURIComponent(
          message
        )}`;
        window.open(whatsappURL, "_blank");
      };
    
  return (
    <div className="container">
        <div id="Contact" className="contact-me">
          <h2>Send me an Message</h2>
          <form>
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <label>Message</label>
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
            />
            <div className="button-group">
              <button type="button" onClick={sendEmail}>
                Send Email
              </button>
              <button type="button" onClick={sendToWhatsApp}>
                Send via WhatsApp
              </button>
            </div>
          </form>
        </div>
    </div>
  )
}

export default Contact
