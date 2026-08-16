import NavList from "./NavList";
import Hero from "./Hero";

const Header = () => {
  /*
    Dunno why but logo.png is not being loaded currently
  
  
  */
  return (
    <header>
      <nav>
        <img src="http://127.0.0.1:8080/logo.png" alt="Logo" />
        <NavList />
      </nav>
      <Hero />
    </header>
  );
};

export default Header;
