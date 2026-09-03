import { useState, useEffect } from "react";
import { API_RESTAURANTS } from "./constants";

const useRestaurants = (page = 1) => {
  const [restaurants, setRestaurants] = useState(null);
  const [failed, setFailed] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch(
        API_RESTAURANTS.concat(`&page=${page}&page_size=16`),
      );
      const data = await response.json();
      data?.data?.finalResult.shift();
      setRestaurants(data?.data?.finalResult);
      setFailed(false);
    } catch (err) {
      setRestaurants(null);
      setFailed(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { restaurants: restaurants, failed: failed };
};

export default useRestaurants;
