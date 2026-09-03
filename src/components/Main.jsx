import { useState } from "react";

import Shimmer from "./Shimmer";
import Hero from "./Hero";

import useRestaurants from "../utils/useRestaurants";
import RestaurantsList from "./RestaurantsList";

const Main = () => {
  const { restaurants, failed } = useRestaurants();
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

  const chooseJSX = () => {
    if (restaurants === null) {
      return failed ? (
        <h2>متاسفانه مشکلی در دریافت رستوران ها رخ داد</h2>
      ) : (
        <Shimmer mode="homepage" />
      );
    }
    return filteredRestaurants.length > 0 ? (
      <RestaurantsList filteredRestaurants={filteredRestaurants} />
    ) : (
      <h2>رستورانی یافت نشد :(</h2>
    );
  };

  return (
    <main className="page-main">
      <Hero setFilterByString={setFilterByString} />
      <h2>رستوران ها</h2>
      {chooseJSX()}
    </main>
  );
};

export default Main;
