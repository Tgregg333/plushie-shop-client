function Contact() {
  return (
    <main>
      <div className="contact">
        <form>
          <input type="text" class="input-field" placeholder="name" />
          <input type="email" class="input-field" placeholder="email" />
          <input type="text" class="input-field" placeholder="subject" />
          <textarea
            type="text"
            className="input-field textarea-field"
            placeholder=" Your message"
          ></textarea>
          <button type="button" className="btn">
            Your Message
          </button>
        </form>
      </div>
    </main>
  );
}

export default Contact;
