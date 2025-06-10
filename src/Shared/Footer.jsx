function Footer() {
  return (
    <footer>
      <section>
          <ul class="footer-nav">
          <li><a href="about us.html"><h3>About Us</h3></a></li>
          <li><a href="contact us.html"><h3>Contact Us</h3></a></li>
        </ul>
        </section>
      
        <section class="icons">    
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-square-twitter"></i>
        </section>
      
        <section class="subscribe-section">
          <h3 class="sub-heading">Join Our Community</h3>
          <section class="subscription-box">
            <form class="subscription-form">
              <input type="email" id="email" name="email" placeholder="Enter your email" required />
              <button type="submit">Subscribe</button>
            </form>
          </section>
        </section>
    </footer>
  );
}

export default Footer;
