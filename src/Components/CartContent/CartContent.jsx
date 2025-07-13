import CartElements from "./CartElements";
import CartTotal from "./CartTotal";
import './CartContent.css'


const CartContent = () => {
  return (
    <div className="carts-list">
      <CartElements />
      <CartTotal />
    </div>
  );
};

export default CartContent;
