import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const NavList = () => {
  return (
    <ul>
      <li>
        <a href="#explore">Explore</a>
      </li>
      <li>
        <button>
          <FontAwesomeIcon icon={faCartShopping} />
        </button>
      </li>
    </ul>
  );
};

export default NavList;
