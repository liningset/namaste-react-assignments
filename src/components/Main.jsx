import { useEffect, useState } from "react";
import data from "../utils/data.json";
import RestaurantCard from "./RestaurantCard";

const Main = ({ filterByString }) => {
  const [restaurants, setRestaurants] = useState(data);

  useEffect(() => {
    const filtered = restaurants.filter((res) => {
      return (
        new RegExp(filterByString, "i").test(res.title) ||
        res.cuisines.some((cuisine) =>
          cuisine.toLowerCase().includes(filterByString),
        )
      );
    });
    setRestaurants(filtered);
  }, [filterByString]);

  return (
    <main id="explore">
      <h2>Restaurants</h2>
      <ul className="restaurants">
        {restaurants.map((restaurant) => (
          <RestaurantCard data={restaurant} key={restaurant.id} />
        ))}
      </ul>
    </main>
  );
};

export default Main;
