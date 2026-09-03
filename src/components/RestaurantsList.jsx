import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router";

const RestaurantsList = ({ filtered }) => {
  return (
    <ul className="restaurants" id="explore">
      {filtered().map((restaurant, i) => (
        <Link
          to={`/restaurants/${restaurant?.data?.vendorCode}`}
          key={restaurant?.id ? restaurant.id : i}
        >
          <RestaurantCard data={restaurant?.data} />
        </Link>
      ))}
    </ul>
  );
};
export default RestaurantsList;
