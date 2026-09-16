import { useContext } from "react";
import { PUBLIC_DIR } from "../utils/constants";
import NavList from "./NavList";
import { Link } from "react-router";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  /*
    Dunno why but logo.png is not being loaded currently
  
  
  */

  const { user } = useContext(UserContext);
  const cartLength = useSelector((store) => store.cart.cartItems).reduce(
    (a, c) => a + c.quantity,
    0,
  );
  console.log("cartLength: ", cartLength);

  return (
    <header className="page-header">
      <nav>
        <ul>
          <li className="text-white">{user}</li>
          <li>
            <Link to="/cart">سبد ({cartLength})</Link>
          </li>
        </ul>
        <NavList />
        <Link to="/">
          <img src={PUBLIC_DIR + "logo.png"} alt="Logo" />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
