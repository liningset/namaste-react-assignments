import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import MenuCard from "../components/MenuCard";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartLength = cartItems.reduce((a, c) => a + c.quantity, 0);
  const totalPrice = cartItems.reduce(
    (a, c) => c.data.variations[0].price * c.quantity + a,
    0,
  );
  console.log(totalPrice);

  const dispatch = useDispatch();

  const handleClearCart = () => dispatch(clearCart());

  return (
    <main className="flex justify-center w-full h-full">
      <div className="w-9/12 p-8">
        <div className="flex w-full flex-col md:flex-row justify-between items-center">
          <h1>سبد خرید</h1>
          <h2>پیش فاکتور: {totalPrice.toLocaleString("fa-IR")} تومان</h2>
        </div>
        <button
          onClick={handleClearCart}
          className={`cursor-pointer${cartLength === 0 ? " opacity-50 pointer-events-none" : ""}`}
        >
          خالی کردن سبد
        </button>
        <ul>
          {cartLength === 0 && (
            <h2 className="text-center">سبد خرید شما خالیست!</h2>
          )}
          {cartItems.map((item, i) => (
            <MenuCard
              key={item.id ?? i}
              productData={item.data}
              quantity={item.quantity}
            />
          ))}
        </ul>
      </div>
    </main>
  );
};
export default CartPage;
