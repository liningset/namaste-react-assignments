import { useState, useEffect } from "react";
import { useParams } from "react-router";
import {
  API_VENDOR_DETAILS,
  API_VENDOR_MENU,
  API_VENDOR_REVIEW,
} from "../utils/constants";
import Shimmer from "../components/Shimmer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faMapPin,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import MenuCategory from "../components/MenuCategory";

const RestaurantPage = () => {
  const { resID } = useParams();
  const [allData, setAllData] = useState(null);

  const fetchData = async (API) => {
    const response = await fetch(API);
    const data = await response.json();
    return data?.data;
  };

  const assembleAllData = async () => {
    const vendorDetails = await fetchData(API_VENDOR_DETAILS + resID);
    const vendorDetailsExtra = await fetchData(API_VENDOR_REVIEW + resID);
    const vendorMenu = await fetchData(API_VENDOR_MENU + resID);
    setAllData({ ...vendorDetails, ...vendorDetailsExtra, ...vendorMenu });
    console.log({ ...vendorDetails, ...vendorDetailsExtra, ...vendorMenu });
  };

  const convertRatingFormat = (rating) => {
    console.log(rating);

    return ((Number(rating) * 5) / 10).toFixed(1);
  };

  useEffect(() => {
    assembleAllData();
  }, []);

  return allData === null ? (
    <Shimmer mode="restaurantpage" />
  ) : (
    <article className="restaurant-container">
      <div className="hero-cover">
        <img src={allData?.cover} alt="cover" />
      </div>
      <div className="article-wrapper">
        <header className="restaurant-header">
          <div className="avatar">
            <img src={allData?.logo} alt="logo" />
          </div>
          <div>
            <h2>{allData?.title}</h2>
            <div className="sub-sub-heading">
              <h4>
                <FontAwesomeIcon icon={faStar} style={{ fontSize: "0.8rem" }} />
                {convertRatingFormat(allData?.rate)}
              </h4>
              <h4>{`(${allData?.rateCount})`}</h4>
              <h4>{allData?.reviewCount} نظر</h4>
            </div>
          </div>
        </header>
        <main className="restaurant-main">
          <h3>
            <FontAwesomeIcon icon={faLocationDot} />
            {allData?.cityTitle}, {allData?.address?.area}
          </h3>
          <p>
            <FontAwesomeIcon icon={faMapPin} style={{ color: "red" }} />
            {allData?.address?.address}
          </p>
          {console.log(allData?.menuCategories[4])}
          {allData?.menuCategories.map((category) => {
            return <MenuCategory key={category.id} categoryData={category} />;
          })}
        </main>
      </div>
    </article>
  );
};
export default RestaurantPage;
