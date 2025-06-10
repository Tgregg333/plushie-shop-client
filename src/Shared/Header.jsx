import {Link} from "react-router-dom"
import '@fortawesome/fontawesome-free/css/all.min.css';

function Header() {
  return (
    <header>
      <Link to="index.html">
        <img src="" alt="" />
      </Link>
      <nav className="navbar">
        <ul className="navbar-list">
          <li>
            <Link to="./Index">Home</Link>
          </li>
          <li>
            <Link to="./Shop">Shop</Link>
          </li>
          <li>
            <Link to="./About">About Us</Link>
          </li>
          <li>
            <Link to="./Contact">Contact Us</Link>
          </li>
        </ul>

        <section className="icon-links">
          <Link to="/cart">
            <i className="fa-solid fa-cart-shopping"></i>
          </Link>
          <Link to="/Login">
            <i className="fa-solid fa-right-to-bracket"></i>
          </Link>
        </section>
      </nav>
    </header>
  );
}

export default Header;
