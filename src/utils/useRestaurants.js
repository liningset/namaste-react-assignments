import { useState, useEffect } from "react";
import { API_RESTAURANTS } from "./constants";

const useFetchRestaurants = (page = 1) => {
  const [restaurants, setRestaurants] = useState(null);

  const fetchData = async () => {
    const response = await fetch(
      API_RESTAURANTS.concat(`&page=${page}&page_size=16`),
    );
    const data = await response.json();
    //removing unnecessary text entry
    data?.data?.finalResult.shift();
    setRestaurants(data?.data?.finalResult);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return restaurants;
};

export default useFetchRestaurants;
