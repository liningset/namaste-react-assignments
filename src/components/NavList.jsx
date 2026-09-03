import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const NavList = () => {
  const isOnline = useOnlineStatus();
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
      {/* just for fun */}
      <li>آنلاین؟ {isOnline ? "🟢" : "🔴"} </li>
    </ul>
  );
};

export default NavList;
