import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const NavList = () => {
  return (
    <ul>
      <li>
        <button>
          <FontAwesomeIcon icon={faCartShopping} />
        </button>
      </li>
      <li>
        <a href="/about">درباره ما</a>
      </li>
      <li>
        <a href="/#explore">گردش</a>
      </li>
    </ul>
  );
};

export default NavList;
