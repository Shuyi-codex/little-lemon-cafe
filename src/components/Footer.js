import logo from "../assets/logo.svg";

function Footer() {
  return (
    <footer>
      <div className="Footer">
        <img src={logo} className="Logo" alt="Restaurant Logo" />
        <section className="Footer-nav">
          <p> Goto...</p>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Menu</a></li>
              <li><a href="#">Reservations</a></li>
              <li><a href="#">Order Online</a></li>
              <li><a href="#">Login</a></li>
            </ul>
          </nav>
        </section>
        <section className="Footer-contact">
          <ul>
            <li>Address</li>
            <li>Phone Number</li>
            <li>Email</li>
          </ul>
        </section>
        <section className="Footer-socials">
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagram</li>
        </section>
      </div>
    </footer>
  );
}

export default Footer;