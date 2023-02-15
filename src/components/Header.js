import Logo from "../assets/logo.svg";

function Header() {
  return (
    <header className="App-header">
      <a href="/"><img src={Logo} className="Logo" alt="Restaurant Logo" /></a>
    </header>
  );
};

export default Header;