import { useContext } from "react";
import { Context } from "../../Context/Context";

const CartElements = () => {
  const { cart } = useContext(Context);

  return cart.map((product) => {
    return (
    <div className="product-card-container" key = {product.id}>
        <img src={product.images[0]} alt="img-card" />
        <h3>{product.title}</h3>
        <h4>{product.price}</h4>
    </div>
    )
  });
};

export default CartElements;