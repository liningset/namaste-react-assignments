import { useEffect } from "react";
import restaurants from "../data.json";
import RestaurantCard from "./RestaurantCard";

const Main = () => {
  restaurants.forEach((res) => console.log(res.title));

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
