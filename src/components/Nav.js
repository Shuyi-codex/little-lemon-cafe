import logo from "../assets/logo.svg";
import { Link } from "react-router-dom"

function Nav() {
  return (
    <header className="App-header">
      <img src={logo} className="Logo" alt="Restaurant Logo" />

      <nav>
        <ul className="App-nav">
          <Link to="/" className="Nav-links">Home</Link>
          <Link to="/" className="Nav-links">About</Link>
          <Link to="/" className="Nav-links">Menu</Link>
          <Link to="/book-table" className="Nav-links">Reservations</Link>
          <Link to="/" className="Nav-links">Order Online</Link>
          <Link to="/" className="Nav-links">Login</Link>
        </ul>

      </nav>

    </header>
  );
};

export default Nav;