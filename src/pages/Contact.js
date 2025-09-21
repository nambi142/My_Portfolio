import { useState } from "react";
import emailjs from "emailjs-com";
import "../Css/Home.css";

const Contact = () => {
  const [form, setForm] = useState({ fullName: "", email: "", message: "" });

  // Handle input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle Email submission
  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      fullName: form.fullName,  
      email: form.email,       
      comments: form.message,   
    };

    emailjs
      .send(
        "service_d1o9x9t",   //   Service ID
        "template_kkcpkv9",  //   Template ID
        templateParams,
        "1tS2Pf3AJo4WbRlEl"  //   Public Key
      )
      .then(
        () => {
          alert("Email sent successfully!");
          setForm({ fullName: "", email: "", message: "" });
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
    const message = `Full Name: ${form.fullName}\nEmail: ${form.email}\nMessage: ${form.message}`;
    const whatsappURL = `https://wa.me/918637619849?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="container">
      <div id="Contact" className="contact-me">
        <h2>Send me a Message</h2>
        <form>
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            placeholder="Your Full Name"
            value={form.fullName}
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
  );
};

export default Contact;
