const RestaurantCard = ({ data }) => {
  return (
    <li className="card">
      <div className="card-heading-image">
        <img
          src={`http://127.0.0.1:8080/restaurant${Math.ceil(Math.random() * 3)}.jpg`}
          alt="restaurant interior"
        />
      </div>
      <div className="content">
        <div className="avatar">
          <img src={data.image} alt={data.titlMC} />
        </div>
        <h4 className="title">{data.title}</h4>
        <span>Starts from {data.minCharge}</span>
        <div className="foot-type-container">
          {data.cuisines.map((cuisine, i) => (
            <span className="food-type" key={i}>
              {cuisine}
            </span>
          ))}
        </div>
        <span>Ratings: {data.rating}/10</span>
      </div>
    </li>
  );
};

export default RestaurantCard;
