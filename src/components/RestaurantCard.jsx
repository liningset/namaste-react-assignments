import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const RestaurantCard = ({ data }) => {
  return (
    <li className="card">
      <div className="card-heading-image">
        <img src={data?.backgroundImage} alt="restaurant interior" />
      </div>
      <div className="content">
        <div className="avatar">
          <img src={data?.logo} alt={data?.title} />
        </div>
        <h4 className="title">{data?.title}</h4>
        <span>از {data?.minOrder / 1000} هزار تومان</span>
        <div className="cuisines">
          {data?.cuisinesArray.map((cuisine) => (
            <span className="cuisine" key={cuisine.id}>
              {cuisine.title}
            </span>
          ))}
        </div>
        <span className="rating-span">
          {data?.rate}/۵
          <FontAwesomeIcon icon={faStar} style={{ color: "gold" }} />
        </span>
      </div>
    </li>
  );
};

export default RestaurantCard;
