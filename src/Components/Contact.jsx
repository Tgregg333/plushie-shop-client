function Contact() {
  return (
    <main>
      <section className="contact-section">
        <h2>Contact Us</h2>
        <form className="contact-form" action="#" method="post">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <input type="text" name="subject" placeholder="Subject" />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </main>
  );
}

export default Contact;
