import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../utils/cartSlice";

const MenuCard = ({ productData, quantity }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const fromCart = cartItems.find((i) => i.id === productData.id);

  const handleAddToCart = (product) => dispatch(addToCart(product));
  const handleRemoveFromCart = (product) => dispatch(removeFromCart(product));

  return (
    <li className="flex flex-col sm:flex-row items-center gap-4 py-4 [&:not(:first-child):not(:last-child)]:border-y border-[#858585]">
      {quantity && <span className="text-xl">x{quantity}</span>}
      <div
        className={`sm:w-4/12 md:w-2/12 aspect-square rounded-2xl overflow-hidden relative${fromCart ? " border-2 border-pink-500" : " border-2 border-transparent"}`}
      >
        <img
          className="w-full h-full"
          src={productData?.images[0]?.thumbnailSrc}
          alt="product"
        />
        <button
          onClick={() => handleAddToCart(productData)}
          className="absolute z-10 left-0 bottom-0 cursor-pointer bg-pink-500 rounded-full text-white border-none p-2 hover:bg-[#454545] duration-300"
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
        {fromCart && (
          <>
            <button
              onClick={() => handleRemoveFromCart(productData)}
              className="absolute z-10 left-10 bottom-0 cursor-pointer bg-pink-500 rounded-full text-white border-none p-2 hover:bg-[#454545] duration-300"
            >
              <FontAwesomeIcon icon={faMinus} />
            </button>
            <span className="bg-pink-500 text-white rounded-full absolute top-0 left-0 text-center w-8 block aspect-square">
              {fromCart.quantity}
            </span>
          </>
        )}
      </div>
      <div className="sm:w-8/12 md:w-10/12">
        <h5 className="font-bold text-lg">{productData?.title}</h5>
        <p>{productData?.description}</p>
        <span>
          {productData?.variations[0].price.toLocaleString("fa-IR")} تومان
        </span>
      </div>
    </li>
  );
};

export default MenuCard;
