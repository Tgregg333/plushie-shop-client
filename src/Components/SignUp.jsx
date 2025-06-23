function SignUp() {
  <main>
    <section className="contact-section">
      <h2>Sign Up</h2>
      <form className="contact-form" action="#" method="post">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <input
          type="password"
          name="confirm_password"
          placeholder="Confirm Password"
          required
        />
        <a href="#" className="btn">
          Sign Up
        </a>
      </form>
    </section>
  </main>;
}
export default SignUp;
