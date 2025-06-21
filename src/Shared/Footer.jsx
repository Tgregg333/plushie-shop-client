import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <section>
        <ul className="footer-nav">
          <li>
            <Link to="/about">
              <h3>About Us</h3>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <h3>Contact Us</h3>
            </Link>
          </li>
        </ul>
      </section>

      <section className="icons">
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-square-twitter"></i>
      </section>

      <section className="subscribe-section">
        <h3 className="sub-heading">Join Our Community</h3>
        <section className="subscription-box">
          <form className="subscription-form">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </section>
      </section>
    </footer>
  );
}

export default Footer;
