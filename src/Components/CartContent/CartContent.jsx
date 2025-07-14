import CartElements from "./CartElements";
import CartTotal from "./CartTotal";
import Cart from "./Cart";
import './CartContent.css'


const CartContent = () => {
  return (
    <div className="carts-list">
      <Cart />
      {/* <CartElements />
      <CartTotal /> */}
    </div>
  );
};

export default CartContent;
