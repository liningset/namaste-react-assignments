import NavList from "./NavList";
import { Link } from "react-router";

const Header = () => {
  /*
    Dunno why but logo.png is not being loaded currently
  
  
  */
  return (
    <header>
      <nav>
        <NavList />
        <Link to="/">
          <img src="http://127.0.0.1:8080/logo.png" alt="Logo" />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
