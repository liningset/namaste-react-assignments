import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const MenuCard = ({ productData }) => {
  return (
    <li className="flex flex-col sm:flex-row items-center gap-4 py-4 [&:not(:first-child):not(:last-child)]:border-y border-[#858585]">
      <div className="sm:w-4/12 md:w-2/12 aspect-square rounded-2xl overflow-hidden relative">
        <img
          className="w-full h-full"
          src={productData?.images[0]?.thumbnailSrc}
          alt="product"
        />
        <button className="absolute z-10 left-0 bottom-0 cursor-pointer bg-[#252525] rounded-full text-white border-none p-2 hover:bg-[#454545] duration-300">
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
      <div className="sm:w-8/12 md:w-10/12">
        <h5 className="font-bold text-lg">{productData?.title}</h5>
        <p>{productData?.description}</p>
        <span>{productData?.variations[0].price} تومان</span>
      </div>
    </li>
  );
};

export default MenuCard;
