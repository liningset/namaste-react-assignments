import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { API_VENDOR_DETAILS, API_VENDOR_MENU } from "../utils/constants";
import Shimmer from "../components/Shimmer";

const RestaurantPage = () => {
  const { resID } = useParams();
  const [menuData, setMenuData] = useState(null);
  const [infoData, setInfoData] = useState(null);

  const fetchMenuData = async () => {
    const menuResponse = await fetch(API_VENDOR_MENU + resID);
    const menuData = await menuResponse.json();
    setMenuData(menuData?.data);
    const infoResponse = await fetch(API_VENDOR_DETAILS + resID);
    const infoData = await infoResponse.json();
    setInfoData(infoData?.data);
    console.log(infoData?.data);
  };

  useEffect(() => {
    fetchMenuData();
  }, []);

  return infoData === null ? (
    <Shimmer />
  ) : (
    <article className="restaurant-container">
      <div className="hero-cover">
        <img src={infoData?.cover} alt="cover" />
      </div>
      <h1>{infoData?.title}</h1>
      <p>{`${infoData?.cityTitle}, ${infoData?.address?.area}, ${infoData?.address?.address}`}</p>
    </article>
  );
};
export default RestaurantPage;
