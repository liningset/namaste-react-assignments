import NavList from "./NavList";
import Hero from "./Hero";

const Header = ({ setFilterByString }) => {
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
      <Hero setFilterByString={setFilterByString} />
    </header>
  );
};

export default Header;
