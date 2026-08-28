import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { API_RESTAURANTS } from "../utils/constants";
import Shimmer from "./Shimmer";
import Hero from "./Hero";
import { Link } from "react-router";

const Main = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [restaurantsFiltered, setRestaurantsFiltered] = useState(restaurants);
  const [filterByString, setFilterByString] = useState("");

  const fetchData = async (page = 1) => {
    const response = await fetch(
      API_RESTAURANTS.concat(`&page=${page}&page_size=16`),
    );
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
    <main className="page-main">
      <Hero setFilterByString={setFilterByString} />
      <h2>رستوران ها</h2>
      {restaurantsFiltered.length === 0 ? (
        <Shimmer mode="homepage" />
      ) : (
        <ul className="restaurants" id="explore">
          {restaurantsFiltered.map((restaurant, i) => (
            <Link
              to={`/restaurants/${restaurant?.data?.vendorCode}`}
              key={restaurant?.id ? restaurant.id : i}
            >
              <RestaurantCard data={restaurant?.data} />
            </Link>
          ))}
        </ul>
      )}
    </main>
  );
};

export default Main;
