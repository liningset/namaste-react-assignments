import { useEffect, useState } from "react";

import Shimmer from "./Shimmer";
import Hero from "./Hero";

import useRestaurants from "../utils/useRestaurants";
import RestaurantsList from "./RestaurantsList";

const Main = () => {
  const restaurants = useRestaurants();
  const [filterByString, setFilterByString] = useState("");
  const [filterSuccessful, setFilterSuccessful] = useState(true);

  const filteredRestaurants = () => {
    if (restaurants === null) return null;
    return restaurants.filter((res) => {
      const data = res.data;
      return (
        data?.title.toLowerCase().includes(filterByString) ||
        data?.cuisinesArray.some((cuisine) =>
          cuisine.title.toLowerCase().includes(filterByString),
        )
      );
    });
  };

  useEffect(() => {
    if (filteredRestaurants() == null) {
      setFilterSuccessful(true);
      return;
    }
    if (filteredRestaurants()?.length > 0) setFilterSuccessful(true);
    else setFilterSuccessful(false);
  }, [filterByString]);

  return (
    <main className="page-main">
      <Hero setFilterByString={setFilterByString} />
      <h2>رستوران ها</h2>
      {restaurants === null ? (
        <Shimmer mode="homepage" />
      ) : filterSuccessful ? (
        <RestaurantsList filtered={filteredRestaurants} />
      ) : (
        <h2>متاسفانه رستورانی یافت نشد :(</h2>
      )}
    </main>
  );
};

export default Main;
