import { useContext } from "react";
import { PUBLIC_DIR } from "../utils/constants";
import NavList from "./NavList";
import { Link } from "react-router";
import UserContext from "../utils/UserContext";

const Header = () => {
  /*
    Dunno why but logo.png is not being loaded currently
  
  
  */

  const { user } = useContext(UserContext);
  return (
    <header className="page-header">
      <nav>
        <span className="text-white">{user}</span>
        <NavList />
        <Link to="/">
          <img src={PUBLIC_DIR + "logo.png"} alt="Logo" />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
