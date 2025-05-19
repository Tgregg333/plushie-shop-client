function Login() {
  <main>
    <section className="contact-section">
      <h2>Login</h2>
      <form className="contact-form" action="#" method="post">
        <input type="email" name="email" placeholder="Email" required />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </form>
    </section>
  </main>;
}
export default Login;
