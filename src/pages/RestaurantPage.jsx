import { useParams } from "react-router";
import useVendorData from "../utils/useVendorData";
import Shimmer from "../components/Shimmer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faMapPin,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import MenuCategory from "../components/MenuCategory";

const RestaurantPage = () => {
  window.scrollTo(0, 0);
  const { vendorID } = useParams();
  const { vendorData: data, failed } = useVendorData(vendorID);

  // e.g. input: 9.20423023224, output: 4.4
  const convertRatingFormat = (rating) => {
    return ((Number(rating) * 5) / 10).toFixed(1);
  };

  return data === null ? (
    failed ? (
      <h2>مشکلی در دریافت اطلاعات رستوران رخ داد</h2>
    ) : (
      <Shimmer mode="restaurantpage" />
    )
  ) : (
    <article className="restaurant-container">
      <div className="hero-cover">
        <img src={data?.cover} alt="cover" />
      </div>
      <div className="article-wrapper">
        <header className="restaurant-header">
          <div className="avatar">
            <img src={data?.logo} alt="logo" />
          </div>
          <div>
            <h2>{data?.title}</h2>
            <div className="sub-sub-heading">
              <h4>
                <FontAwesomeIcon icon={faStar} style={{ fontSize: "0.8rem" }} />
                {convertRatingFormat(data?.rate)}
              </h4>
              <h4>{`(${data?.rateCount})`}</h4>
              <h4>{data?.reviewCount} نظر</h4>
            </div>
          </div>
        </header>
        <main className="restaurant-main">
          <h3>
            <FontAwesomeIcon icon={faLocationDot} />
            {data?.cityTitle}, {data?.address?.area}
          </h3>
          <p>
            <FontAwesomeIcon icon={faMapPin} style={{ color: "red" }} />
            {data?.address?.address}
          </p>
          {data?.menuCategories.map((category) => {
            return <MenuCategory key={category.id} categoryData={category} />;
          })}
        </main>
      </div>
    </article>
  );
};
export default RestaurantPage;
