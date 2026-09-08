import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const RestaurantCard = ({ data }) => {
  return (
    <li className="restaurant-card group hover:-translate-y-3 flex flex-col rounded-4xl h-full bg-white overflow-hidden duration-300 ease">
      <div className="h-44 overflow-hidden">
        <img
          src={data?.backgroundImage}
          className="group-hover:scale-110 w-full h-full object-cover object-center rounded-b-4xl transition-transform duration-300 ease"
          alt="restaurant interior"
        />
      </div>
      <div className="flex flex-col gap-2 px-4 pb-4">
        <div className="rounded-full w-20 -mt-10 self-center bg-white overflow-hidden aspect-square shadow z-10">
          <img className="w-full h-full" src={data?.logo} alt={data?.title} />
        </div>
        <h4 className="font-bold text-lg mt-4">{data?.title}</h4>
        <span>از {data?.minOrder / 1000} هزار تومان</span>
        <div className="flex flex-wrap gap-2">
          {data?.cuisinesArray.map((cuisine) => (
            <span
              className="bg-amber-200 rounded-md inline-block"
              key={cuisine.id}
            >
              {cuisine.title}
            </span>
          ))}
        </div>
        <span className="rating-span">
          {data?.rate}/۵
          <FontAwesomeIcon icon={faStar} className="text-amber-500" />
        </span>
      </div>
    </li>
  );
};

export default RestaurantCard;
