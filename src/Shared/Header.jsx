import {Link} from "react-router-dom"
function Header() {
  return (
    <header>
      <Link to="index.html">
        <img src="" alt="" />
      </Link>
      <nav className="navbar">
        <ul className="navbar-list">
          <Link to="./cart.html" className="fa-solid fa-cart-shopping"></Link>
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
      </nav>
    </header>
  );
}

export default Header;
