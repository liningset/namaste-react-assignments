import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const MenuCard = ({ productData }) => {
  console.log(productData);

  return (
    <li className="product-card">
      <div className="product-cover">
        <img src={productData?.images[0]?.thumbnailSrc} alt="product" />
        <button>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
      <div className="product-info">
        <h5>{productData?.title}</h5>
        <p>{productData?.description}</p>
        <span>{productData?.variations[0].price} تومان</span>
      </div>
    </li>
  );
};

export default MenuCard;
