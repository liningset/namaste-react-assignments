import { Link } from "react-router";

const NavList = () => {
  return (
    <ul>
      <li>
        <Link to="/login">ورود</Link>
      </li>
      <li>
        <Link to="/contact">تماس با ما</Link>
      </li>
      <li>
        <Link to="/about">درباره ما</Link>
      </li>
      <li>
        <Link to="/#explore">مشاهده</Link>
      </li>
    </ul>
  );
};

export default NavList;
