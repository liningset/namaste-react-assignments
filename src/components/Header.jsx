import { PUBLIC_DIR } from "../utils/constants";
import NavList from "./NavList";
import { Link } from "react-router";

const Header = ({ setFilterByString }) => {
  /*
    Dunno why but logo.png is not being loaded currently
  
  
  */
  return (
    <header className="page-header">
      <nav>
        <NavList />
        <Link to="/">
          <img src={PUBLIC_DIR + "logo.png"} alt="Logo" />
        </Link>
      </nav>
<<<<<<< HEAD
=======
      <Hero setFilterByString={setFilterByString} />
>>>>>>> 8aba49b (added search restaurants feature via useState + useEffect)
    </header>
  );
};

export default Header;
