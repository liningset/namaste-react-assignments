import MenuAccordion from "./MenuAccordion";

const Accordions = ({ categories }) => {
  console.log(categories);

  return (
    <ul className="flex flex-col gap-2 list-none">
      {categories.map((category) => {
        return <MenuAccordion key={category.id} data={category} />;
      })}
    </ul>
  );
};
export default Accordions;
