import MenuCard from "./MenuCard";

const MenuCategory = ({ categoryData }) => {
  return (
    <section className="category">
      <h4>{categoryData.title}</h4>
      <ul>
        {categoryData.products.map((product, i) => (
          <MenuCard key={product.id ?? i} productData={product} />
        ))}
      </ul>
    </section>
  );
};

export default MenuCategory;
