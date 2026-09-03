import { useState } from "react";

import Shimmer from "./Shimmer";
import Hero from "./Hero";

import useRestaurants from "../utils/useRestaurants";
import RestaurantsList from "./RestaurantsList";

const Main = () => {
  const restaurants = useRestaurants();
  const [filterByString, setFilterByString] = useState("");
  const filteredRestaurants = restaurants?.filter((res) => {
    const data = res.data;
    return (
      data?.title.toLowerCase().includes(filterByString.toLowerCase()) ||
      data?.cuisinesArray.some((cuisine) =>
        cuisine.title.toLowerCase().includes(filterByString.toLowerCase()),
      )
    );
  });

  return (
    <main className="page-main">
      <Hero setFilterByString={setFilterByString} />
      <h2>رستوران ها</h2>
      {restaurants === null ? (
        <Shimmer mode="homepage" />
      ) : filteredRestaurants.length > 0 ? (
        <RestaurantsList filteredRestaurants={filteredRestaurants} />
      ) : (
        <h2>متاسفانه رستورانی یافت نشد :(</h2>
      )}
    </main>
  );
};

export default Main;
