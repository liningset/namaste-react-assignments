import { PUBLIC_DIR } from "../utils/constants";
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
          <img src={PUBLIC_DIR + "logo.png"} alt="Logo" />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
