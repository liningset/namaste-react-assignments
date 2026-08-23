import NavList from "./NavList";
import Hero from "./Hero";

const Header = () => {
  /*
    Dunno why but logo.png is not being loaded currently
  
  
  */
  return (
    <header>
      <nav>
        <NavList />
        <a href="/">
          <img src="http://127.0.0.1:8080/logo.png" alt="Logo" />
        </a>
      </nav>
    </header>
  );
};

export default Header;
