import NavList from "./NavList";
import Hero from "./Hero";
import logo from "../logo.png";

const Header = () => {
  /*
    Dunno why but logo.png is not being loaded currently
  
  
  */
  return (
    <header>
      <nav>
        <img src="../logo.png" alt="Logo" />
        <NavList />
      </nav>
      <Hero />
    </header>
  );
};

export default Header;
