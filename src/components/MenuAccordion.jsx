import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import MenuCard from "./MenuCard";

const MenuAccordion = ({ data, expanded, setExpandIndex }) => {
  return (
    <li className="shadow border border-[#858585] rounded-md">
      <button
        onClick={setExpandIndex}
        className="bg-[#858585] w-full flex justify-between items-center text-white border-none py-2 px-4 cursor-pointer"
      >
        <h4 className="text-2xl">
          {data.title} ({data.products.length})
        </h4>
        <FontAwesomeIcon
          icon={faChevronDown}
          className={`duration-300 transition-transform${expanded && " rotate-x-180"}`}
        />
      </button>

      {expanded && (
        <ul className="flex flex-col p-8 list-none">
          {data.products.map((product, i) => (
            <MenuCard
              key={product.id ?? i}
              productData={{ ...product, id: product.id ?? product.title }}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

export default MenuAccordion;
