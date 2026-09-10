import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import MenuCard from "./MenuCard";
import { useState } from "react";

const MenuAccordion = ({ data }) => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <li className="shadow border border-[#858585] rounded-md">
      <button
        onClick={handleClick}
        className="bg-[#858585] w-full flex justify-between items-center text-white border-none py-2 px-4 cursor-pointer"
      >
        <h4 className="text-2xl">
          {data.title} ({data.products.length})
        </h4>
        <FontAwesomeIcon
          icon={faChevronDown}
          className={`duration-300 transition-transform${show && " rotate-x-180"}`}
        />
      </button>

      {show && (
        <ul className="flex flex-col p-8 list-none">
          {data.products.map((product, i) => (
            <MenuCard key={product.id ?? i} productData={product} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default MenuAccordion;
