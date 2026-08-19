import { useEffect, useState } from "react";
import data from "../utils/data.json";
import RestaurantCard from "./RestaurantCard";
import { PROXY, API } from "../utils/constants";

const Main = ({ filterByString }) => {
  const [restaurants, setRestaurants] = useState(data);

  const fetchData = async (page = 1) => {
    const response = await fetch(API.concat(`&page=${page}&page_size=10`));
    const data = await response.json();
    data.data.finalResult.shift();
    setRestaurants(data.data.finalResult);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const filtered = restaurants.filter((res) => {
      return (
        new RegExp(filterByString, "i").test(res.title) ||
        res?.cuisinesArray.some((cuisine) =>
          cuisine.title.toLowerCase().includes(filterByString),
        )
      );
    });
    setRestaurants(filtered);
  }, [filterByString]);

  return (
    <main id="explore">
      <h2>رستوران ها</h2>
      <ul className="restaurants">
        {restaurants.map((restaurant, i) => (
          <RestaurantCard
            data={restaurant?.data}
            key={restaurant?.id ? restaurant.id : i}
          />
        ))}
      </ul>
      <button onClick={() => fetchData(2)}>fetch more</button>
    </main>
  );
};

export default Main;
