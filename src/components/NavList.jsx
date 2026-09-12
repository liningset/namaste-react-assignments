import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const NavList = () => {
  const isOnline = useOnlineStatus();
  const { loggedIn } = useContext(UserContext);

  return (
    <ul>
      {!loggedIn && (
        <li>
          <Link to="/login">ورود</Link>
        </li>
      )}
      <li>
        <Link to="/">خانه</Link>
      </li>
      <li>
        <Link to="/contact">تماس با ما</Link>
      </li>
      <li>
        <Link to="/about">درباره ما</Link>
      </li>
    </ul>
  );
};

export default NavList;
