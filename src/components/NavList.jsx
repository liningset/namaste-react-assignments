import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";

const NavList = () => {
  return (
    <ul>
      <li>
        <button>
          <FontAwesomeIcon icon={faCartShopping} />
        </button>
      </li>
      <li>
        <Link to="/about">درباره ما</Link>
      </li>
      <li>
        <Link to="/#explore">گردش</Link>
      </li>
    </ul>
  );
};

export default NavList;
