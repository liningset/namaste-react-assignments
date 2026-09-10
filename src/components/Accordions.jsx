import MenuAccordion from "./MenuAccordion";
import { useState } from "react";

const Accordions = ({ categories }) => {
  const [expandIndex, setExpandIndex] = useState(null);

  return (
    <ul className="flex flex-col gap-2 list-none">
      {categories.map((category, index) => {
        return (
          <MenuAccordion
            key={category.id}
            data={category}
            expanded={expandIndex === index}
            setExpandIndex={() =>
              setExpandIndex(expandIndex === index ? null : index)
            }
          />
        );
      })}
    </ul>
  );
};
export default Accordions;
