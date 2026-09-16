import { Link } from "react-router";
import { useSelector } from "react-redux";

const NavList = () => {
  const loggedIn = useSelector((state) => state.user.loggedIn);

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
