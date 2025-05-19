
function Header() {
  return (
    <header>
      <a href="index.html">
        <img src="" alt="" />
      </a>
      <nav className="navbar">
        <ul className="navbar-list">
          <a href="./cart.html" className="fa-solid fa-cart-shopping"></a>
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
            <Link to="./Shop">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
