import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { API } from "../utils/constants";
import Shimmer from "./Shimmer";

const Main = ({ filterByString }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [restaurantsFiltered, setRestaurantsFiltered] = useState(restaurants);

  const fetchData = async (page = 1) => {
    const response = await fetch(API.concat(`&page=${page}&page_size=16`));
    const data = await response.json();
    //removing unnecessary text entry
    data.data.finalResult.shift();
    setRestaurants(data.data.finalResult);
    //i explained below why i didn't just set both states here
  };

  useEffect(() => {
    fetchData();
  }, []);

  /* i populated it seperately because i dont want possible pagination which
  will use the same fetchData function call to ruin the filtered list of restaurants */
  useEffect(() => {
    setRestaurantsFiltered(restaurants);
  }, [restaurants]);

  useEffect(() => {
    const filtered = restaurants.filter((res) => {
      const data = res.data;
      return (
        new RegExp(filterByString, "i").test(data.title) ||
        data?.cuisinesArray.some((cuisine) =>
          cuisine.title.toLowerCase().includes(filterByString),
        )
      );
    });
    setRestaurantsFiltered(filtered);
  }, [filterByString]);

  return (
    <main id="explore">
      <h2>رستوران ها</h2>
      {restaurantsFiltered.length === 0 ? (
        <Shimmer />
      ) : (
        <ul className="restaurants">
          {restaurantsFiltered.map((restaurant, i) => (
            <RestaurantCard
              data={restaurant?.data}
              key={restaurant?.id ? restaurant.id : i}
            />
          ))}
        </ul>
      )}
    </main>
  );
};

export default Main;
