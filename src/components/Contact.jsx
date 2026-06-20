import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vskjhoz", // replace
        "template_16qf2by", // replace
        form.current,
        "s3eI_mtd6MITiAdxa" // replace
      )
      .then(
        () => {
          alert("Message Sent Successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error);
          alert("Failed to send message");
        }
      );
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>

      <form ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />

        <input
          type="text"
          name="title"
          placeholder="Subject"
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
        ></textarea>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;